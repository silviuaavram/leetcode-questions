/**
 * https://leetcode.com/problems/combination-sum/description
 * 
 * We generate combinations by considering a candidate or not.
 * If we consider it, we might consider it again.
 * If not, we remove it from consideration.
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  function generateCombination(
    nums: number[],
    remainingCandidates: number[],
    remainingTarget: number,
  ) {
  if (remainingTarget < 0) {
      return
    }

    if (remainingTarget === 0) {
      result.push(nums)

      return
    }

    if (remainingCandidates.length === 0) {
        return
    }


    generateCombination(
      [...nums, remainingCandidates[0]],
      remainingCandidates,
      remainingTarget - remainingCandidates[0],
    )
    generateCombination(nums, remainingCandidates.slice(1), remainingTarget)
  }

  generateCombination([], candidates, target)


  return result
}

export {combinationSum}
