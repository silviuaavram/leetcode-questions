/**
 * https://leetcode.com/problems/summary-ranges/description
 */
function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  const rangeQueue: number[] = []

  for (const num of nums) {
    if (!rangeQueue.length || rangeQueue[rangeQueue.length - 1] === num - 1) {
      rangeQueue.push(num)

      continue
    }

    if (rangeQueue.length === 1) {
      result.push(String(rangeQueue[0]))
    } else {
      result.push(`${rangeQueue[0]}->${rangeQueue[rangeQueue.length - 1]}`)
    }

    rangeQueue.length = 0
    rangeQueue.push(num)
  }

  if (!rangeQueue.length) {
    return result
  }

  if (rangeQueue.length === 1) {
    result.push(String(rangeQueue[0]))
  } else {
    result.push(`${rangeQueue[0]}->${rangeQueue[rangeQueue.length - 1]}`)
  }

  return result
}

export {summaryRanges}
