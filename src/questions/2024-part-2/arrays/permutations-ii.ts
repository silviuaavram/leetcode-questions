/**
 * https://leetcode.com/problems/permutations-ii/description
 *
 * We generate permutations recursively and throw away duplicates using a hash set.
 */

function permuteUnique(nums: number[]): number[][] {
  const result = []
  const generated = new Set<string>()

  function generatePermutation(permutation: number[], options: number[]) {
    if (!options.length && !generated.has(permutation.join('-'))) {
      result.push(permutation)
      generated.add(permutation.join('-'))
    }

    for (let index = 0; index < options.length; index++) {
      generatePermutation(
        [...permutation, options[index]],
        [...options.slice(0, index), ...options.slice(index + 1)],
      )
    }
  }

  generatePermutation([], nums)

  return result
}

export {permuteUnique}
