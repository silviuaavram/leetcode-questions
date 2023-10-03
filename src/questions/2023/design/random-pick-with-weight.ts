class Solution {
  private totalProbability: number
  private probabilities: number[]

  constructor(w: number[]) {
    this.totalProbability = 0
    this.probabilities = [0]

    for (const probability of w) {
      this.totalProbability += probability
      this.probabilities.push(this.totalProbability) // the numbers represent non-inclusive limits.
    }
  }

  pickIndex(): number {
    const randomProbability = Math.floor(Math.random() * this.totalProbability)

    return this.search(randomProbability)
  }

  // for [1, 2, 3] our probabilities is [0, 1, 3].
  // randomly, we will generate numbers 0 - 5.
  // index 0 means number 0, index 1 means numbers 1 and 2, index 2 means numbers 3, 4 and 5.
  // we will search in probabilities for the largest number that is smaller than the random probability, and its index is the result.
  private search(probability: number): number {
    let indexStart = 0
    let indexEnd = this.probabilities.length - 1

    while (indexStart <= indexEnd) {
      const indexMiddle = Math.floor((indexEnd + indexStart) / 2)

      if (this.probabilities[indexMiddle] === probability) {
        break
      }

      if (this.probabilities[indexMiddle] > probability) {
        indexEnd = indexMiddle - 1
      } else {
        indexStart = indexMiddle + 1
      }
    }

    return Math.min(indexEnd, indexStart)
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

export {Solution}
