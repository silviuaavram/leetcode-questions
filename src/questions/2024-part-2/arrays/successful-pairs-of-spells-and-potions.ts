/**
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description
 *
 * If we find a spell * potion combination, it means all all combinations with bigger potions will work as well.
 * We sort the potions, then find the minimum potion for the combination to be successful, using binary search.
 * If we find a unsuccessful combination, we try with a higher value.
 * Otherwise, we try a lesser value, but including that value.
 */
function successfulPairs(
  spells: number[],
  _potions: number[],
  success: number,
): number[] {
  const potions = _potions.sort((p1, p2) => p1 - p2)

  function findCombination(start: number, end: number, spell: number): number {
    const middle = Math.floor((start + end) / 2)
    const score = potions[middle] * spell

    if (start === end) {
      return score < success ? 0 : potions.length - start
    }

    if (score >= success) {
      return findCombination(start, middle, spell)
    } else {
      return findCombination(middle + 1, end, spell)
    }
  }

  return spells.map(spell => findCombination(0, potions.length - 1, spell))
}

export {successfulPairs}
