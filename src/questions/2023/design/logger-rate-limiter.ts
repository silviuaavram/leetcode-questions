/**
 * https://leetcode.com/problems/logger-rate-limiter/
 */
class Logger {
  private messageTimes: Map<string, number>

  constructor() {
    this.messageTimes = new Map()
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const lastTimestamp = this.messageTimes.get(message)

    if (lastTimestamp === undefined || timestamp - lastTimestamp >= 10) {
      this.messageTimes.set(message, timestamp)

      return true
    }

    return false
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

export {Logger}
