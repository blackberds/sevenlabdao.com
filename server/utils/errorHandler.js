export class MonitoringErrorHandler {
  static shouldRetry(error) {
    const retryMessages = [
      'timeout', 'rate limit', 'too many requests', 
      'network', 'server', 'connection'
    ];
    
    return retryMessages.some(msg => 
      error.message.toLowerCase().includes(msg)
    );
  }
  
  static getRetryDelay(attempt) {
    return Math.min(1000 * Math.pow(2, attempt), 30000);
  }
}