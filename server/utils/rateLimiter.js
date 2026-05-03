// utils/rateLimiter.js
class RateLimiter {
  constructor(requestsPerSecond = 5) {
    this.requestsPerSecond = requestsPerSecond;
    this.lastRequestTime = 0;
    this.queue = [];
  }

  async waitForTurn() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    const minInterval = 1000 / this.requestsPerSecond;

    if (timeSinceLastRequest < minInterval) {
      await new Promise(resolve => 
        setTimeout(resolve, minInterval - timeSinceLastRequest)
      );
    }

    this.lastRequestTime = Date.now();
  }
}

export const rpcRateLimiter = new RateLimiter(3); // 3 запроса в секунду