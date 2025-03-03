/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/description
 * 
 * We use a set to keep the numbers and a random generator to get the index of the number to return from the set.
 */
class RandomizedSet {
  private set: Set<number>
  constructor() {
    this.set = new Set()
  }

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false
    }

    this.set.add(val)

    return true
  }

  remove(val: number): boolean {
    if (this.set.has(val)) {
      this.set.delete(val)

      return true
    }

    return false
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.set.size)

    return Array.from(this.set)[random]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export {RandomizedSet}
