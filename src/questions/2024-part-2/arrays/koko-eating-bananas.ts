/**
 * https://leetcode.com/problems/koko-eating-bananas/description
 * 
 * We binary search for the minim eating speed.
 * We start with 0 and maximum pile, since we don't need to eat more than this.
 * Then we pick the middle speed, check how many hours we need to eat, then adapt point accordingly.
 * If the speed allows us to eat in fewer or equal hours, we search for a lower speed.
 * We include this previous speed in the next search.
 */

function minEatingSpeed(piles: number[], h: number): number {
  function getSpeed(start: number, end: number) {
    if (start === end) {
      return start
    }

    const speed = Math.floor((start + end) / 2)
    let days = 0

    for (let index = 0; index < piles.length; index++) {
      const pile = piles[index]

      days += Math.ceil(pile / speed)
    }

    if (days > h) {
      return getSpeed(speed + 1, end)
    } else {
      return getSpeed(start, speed)
    }
  }

  return getSpeed(0, Math.max(...piles))
}

export {minEatingSpeed}
