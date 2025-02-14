/**
 * https://leetcode.com/problems/combination-sum-ii/description
 * 
 * We sort the candidates so we will check for duplicates better.
 * In a solution building function, we will have a start index, possible solution numbers and remaining target sum.
 * In the function, we check target sum first.
 * If less than 0, it means we went too far, we return.
 * If 0, we achieved target, we push the numbers to result, and return.
 * Otherwise, we consider next candidates starting from index.
 * We discard duplicate candidates and stop when candidate is larger than remaining target sum.
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const result = []

  candidates.sort((a, b) => a - b)

  function buildSolution(
    solutionIndex: number,
    nums: number[],
    remaining: number,
  ) {
    if (remaining < 0) {
      return
    }

    if (remaining === 0) {
      result.push([...nums])

      return
    }

    for (
      let index = solutionIndex;
      index < candidates.length && remaining >= candidates[index];
      index++
    ) {
      if (
        index > solutionIndex &&
        candidates[index] === candidates[index - 1]
      ) {
        continue
      }

      nums.push(candidates[index])

      buildSolution(
        index + 1,
        nums,
        remaining - candidates[index],
      )

      nums.pop()
    }
  }

  buildSolution(0, [], target)

  return result
}

export {combinationSum2}
