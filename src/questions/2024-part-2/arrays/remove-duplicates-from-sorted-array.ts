/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description
 * 
 * We iterate and save individual nums as well as positions for duplicates.
 * When we find an individual number, if we have duplicate positions saved, we move that number.
 */
function removeDuplicates(nums: number[]): number {
  const numbers = new Set<number>()
  const indeces = []

  for (let index = 0; index < nums.length; index++) {
    if (numbers.has(nums[index])) {
      indeces.push(index)
    } else {
      if (indeces.length) {
        const indexToRemove = indeces.splice(0, 1)[0]
        nums[indexToRemove] = nums[index]
        indeces.push(index)
      }

      numbers.add(nums[index])
    }
  }

  return numbers.size
}

export {removeDuplicates}
