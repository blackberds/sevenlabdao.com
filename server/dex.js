// scripts/generateSeed.js
import crypto from "crypto";

const seed = crypto.randomBytes(32).toString("hex"); // 32 байта = 64 hex символа
console.log("CERAMIC_SEED_HEX=" + seed);
