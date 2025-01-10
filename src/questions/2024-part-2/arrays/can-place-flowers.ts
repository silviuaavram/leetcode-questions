/**
 * https://leetcode.com/problems/can-place-flowers/description
 * 
 * We just place flowers in the flowerbed and check if we placed enough.
 */
function canPlaceFlowers(_flowerbed: number[], n: number): boolean {
  const flowerbed = [..._flowerbed]
  let flowersPlanted = 0

  for (let index = 0; index < flowerbed.length; index++) {
    if (
      flowerbed[index] === 0 &&
      (flowerbed[index - 1] ?? 0) === 0 &&
      (flowerbed[index + 1] ?? 0) === 0
    ) {
      flowerbed[index] = 1
      flowersPlanted++
    }
  }

  return flowersPlanted >= n
}

export {canPlaceFlowers}
