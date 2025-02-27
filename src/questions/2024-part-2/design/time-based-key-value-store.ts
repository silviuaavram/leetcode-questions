/**
 * https://leetcode.com/problems/time-based-key-value-store/description
 * 
 * We will use a map with a key value pair, where value is another map, with keys being timestamps.
 * That's how we will store different values for different time stamps.
 * In order to retrieve the value at a timestamp, we binary search the smallest value that larger or equal to the timestamp.
 * If this value is the fist found timestamp and it's larger than the searched timestamp, we return empty string.
 *
 */
class TimeMap {
  private values: Map<string, Map<number, string>>

  constructor() {
    this.values = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.values.has(key)) {
      this.values.set(key, new Map())
    }

    const timeStamps = this.values.get(key)

    if (!timeStamps.has(timestamp)) {
      timeStamps.set(timestamp, value)
    }
  }

  get(key: string, timestamp: number): string {
    const timeStamps = this.values.get(key)

    if (!timeStamps) {
      return ''
    }

    const timeValues = Array.from(timeStamps.keys())

    let start = 0
    let end = timeValues.length - 1

    while (start < end) {
      const mid = Math.ceil((start + end) / 2)

      if (timeValues[mid] > timestamp) {
        end = mid - 1
      } else {
        start = mid
      }
    }

    return start === 0 && timeValues[start] > timestamp
      ? ''
      : timeStamps.get(timeValues[start])
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

export {TimeMap}
