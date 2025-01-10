/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description
 *
 * We get the max number of candies, then check each number of candies if we add extra candies, it's at least the max.
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies)

  return candies.map(candie => candie + extraCandies >= maxCandies)
}

export {kidsWithCandies}
