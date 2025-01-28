/**
 * https://leetcode.com/problems/kth-missing-positive-number/description
 * 
 * We iterate through the numbers and calculate the difference between each adjacent numbers.
 * In the space between the numbers we can add more numbers, so we need to subtact them from k.
 * If we can add more, we iterate more.
 * If the space is bigger than what we can still add, we break, and return the previous number + the remaining numbers we had to add.
 * If we iterate and still have numbers to add, we add on top of the last number.
 * We should also check if there's a gap large enough between 1 and the first number in the array.
 * In that case we can skip the iteration and just add the required numbers between 1 and that first number.
 */
function findKthPositive(arr: number[], k: number): number {
  let count = arr[0] - 1

  if (count >= k) {
    return k
  }

  for (let index = 1; index < arr.length; index++) {
    const difference = arr[index] - arr[index - 1] - 1

    if (difference + count < k) {
      count = count + difference

      continue
    }

    return arr[index - 1] + k - count
  }

  return arr[arr.length - 1] + k - count
}

export {findKthPositive}
