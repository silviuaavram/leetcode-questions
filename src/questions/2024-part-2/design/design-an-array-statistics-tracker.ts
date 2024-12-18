/**
 * https://leetcode.com/problems/design-an-array-statistics-tracker/description
 * 
 * The implementation fails on leetcode speed tests, but it works functionally.
 * We keep a map for tracking occurances and an array which will act as a heap.
 * When asked for mean, we sum the numbers and divide them by the array number.
 * When asked for median, we get the sorted numbers in the heap and get the middle one.
 * When asked for mode, we get the map entries, sorted by occurances and value (if occurances are equal).
 */
class StatisticsTracker {
  private mode: Map<number, number>
  private numbers: number[]

  constructor() {
    this.mode = new Map()
    this.numbers = []
  }

  addNumber(number: number): void {
    this.numbers.push(number)
    this.mode.set(number, (this.mode.get(number) ?? 0) + 1)
  }

  removeFirstAddedNumber(): void {
    const removedNumber = this.numbers.splice(0, 1)[0]
    this.mode.set(removedNumber, this.mode.get(removedNumber) - 1)
  }

  getMean(): number {
    const sum = this.numbers.reduce((acc, num) => acc + num, 0)

    return Math.floor(sum / this.numbers.length)
  }

  getMedian(): number {
    const sortedNumbers = [...this.numbers].sort((a, b) => a - b)
    const size = sortedNumbers.length

    return sortedNumbers[Math.floor(size / 2)]
  }

  getMode(): number {
    const values = Array.from(this.mode.entries()).sort(
      ([k1, v1], [k2, v2]) => {
        const diff = v2 - v1

        if (diff === 0) {
          return k1 - k2
        }

        return diff
      },
    )

    return values[0][0]
  }
}

/**
 * Your StatisticsTracker object will be instantiated and called as such:
 * var obj = new StatisticsTracker()
 * obj.addNumber(number)
 * obj.removeFirstAddedNumber()
 * var param_3 = obj.getMean()
 * var param_4 = obj.getMedian()
 * var param_5 = obj.getMode()
 */

export {StatisticsTracker}
