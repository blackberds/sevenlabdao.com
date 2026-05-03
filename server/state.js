// state.js - убрать импорт и оставить только экспорт
export const state = {
  userBalances: new Map(),
  userStates: new Map(),
  rpcRateLimiter: {
    requestQueue: [],
    isProcessing: false,
    lastRequest: 0,
    minInterval: 2000 // 2 секунды между запросами
  },
  bot: null,
  userWalletsSet: new Set()
};