import { Telegraf } from 'telegraf';
import { pool } from '../db.js';
import config from '../config.js';
import logger from '../utils/logger.js';
import { state } from '../state.js';
import { ethers } from "ethers";

let currentProviderIndex = 0;

export function getNextProvider() {
  try {
    const rpcUrls = [
      "https://bsc-dataseed1.binance.org/",
      "https://bsc-dataseed2.binance.org/", 
      "https://bsc-dataseed3.binance.org/",
      "https://bsc-dataseed4.binance.org/",
      "https://bsc-dataseed.bnbchain.org/",
    ].filter(url => url && url.startsWith("https"));

    if (rpcUrls.length === 0) {
      throw new Error("No valid RPC URLs available");
    }

    currentProviderIndex = (currentProviderIndex + 1) % rpcUrls.length;
    const selectedUrl = rpcUrls[currentProviderIndex];

    console.log(`🔄 Using RPC: ${selectedUrl}`);

    // Create provider with proper configuration
    const provider = new ethers.JsonRpcProvider(selectedUrl, {
      name: 'binance',
      chainId: 56
    });

    return provider;
  } catch (error) {
    console.error("❌ Error creating RPC provider:", error);
    // Ultimate fallback
    return new ethers.JsonRpcProvider("https://bsc-dataseed.bnbchain.org/", {
      name: 'binance', 
      chainId: 56
    });
  }
}

// Очередь запросов с приоритетом
export function addToRpcQueue(operation, priority = 'normal') {
  return new Promise((resolve, reject) => {
    const item = {
      operation,
      resolve,
      reject,
      priority: priority === 'high' ? 0 : 1,
      timestamp: Date.now()
    };
    
    rpcRateLimiter.requestQueue.push(item);
    rpcRateLimiter.requestQueue.sort((a, b) => a.priority - b.priority);
    
    processRpcQueue();
  });
}

// Добавляем async к этой функции
export async function processRpcQueue() {
  if (rpcRateLimiter.isProcessing || rpcRateLimiter.requestQueue.length === 0) {
    return;
  }
  
  rpcRateLimiter.isProcessing = true;
  
  while (rpcRateLimiter.requestQueue.length > 0) {
    const now = Date.now();
    const timeSinceLastRequest = now - rpcRateLimiter.lastRequest;
    
    // Respect interval between requests
    if (timeSinceLastRequest < rpcRateLimiter.minInterval) {
      await new Promise(resolve => 
        setTimeout(resolve, rpcRateLimiter.minInterval - timeSinceLastRequest)
      );
    }
    
    const item = rpcRateLimiter.requestQueue.shift();
    rpcRateLimiter.lastRequest = Date.now();
    
    try {
      const result = await item.operation();
      item.resolve(result);
      rpcRateLimiter.consecutiveErrors = 0; // Reset error counter on success
    } catch (error) {
      item.reject(error);
      rpcRateLimiter.consecutiveErrors++;
      
      // Handle rate limit errors
      if (error.info?.error?.code === -32005 || error.message.includes('rate limit')) {
        console.log('⚠️ Rate limit detected, increasing interval...');
        rpcRateLimiter.minInterval = 5000; // 5 seconds
        setTimeout(() => {
          rpcRateLimiter.minInterval = 2000;
          console.log('✅ Rate limit cooldown complete');
        }, 60000);
        break;
      }
      
      // Temporary disable on too many errors
      if (rpcRateLimiter.consecutiveErrors >= rpcRateLimiter.maxConsecutiveErrors) {
        console.log('🚫 Too many consecutive RPC errors, temporary pause');
        rpcRateLimiter.minInterval = 10000; // 10 seconds
        setTimeout(() => {
          rpcRateLimiter.consecutiveErrors = 0;
          rpcRateLimiter.minInterval = 2000;
          console.log('✅ RPC error cooldown complete');
        }, 120000);
        break;
      }
    }
    
    // Small pause between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  rpcRateLimiter.isProcessing = false;
}