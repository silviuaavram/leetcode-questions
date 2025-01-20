/**
 * https://leetcode.com/problems/asteroid-collision/description
 *
 * We use a stack to calculate collisions.
 * If the stack is empty or there will be no collision, we push asteroid to stack.
 * Collision happens when asteroid is negative and previous asteroid is positive.
 * For collisions, we loop previous asteroid until stack is empty or asteroids stop being positive.
 * In the loop we check the cases:
 * 1. if both are equal in abs value, we pop previous asteroid, and exit.
 * 2. if current asteroid is smaller, we exit.
 * 3. if previous asteroid is smaller, we pop it, and exit if we depleted stack or next asteroid is not positive.
 */
function asteroidCollision(asteroids: number[]): number[] {
  const result = []

  for (const asteroid of asteroids) {
    if (!result.length || !(asteroid < 0 && result[result.length - 1] > 0)) {
      result.push(asteroid)

      continue
    }

    while (result.length) {
      const asteroidSize = Math.abs(asteroid)

      if (result[result.length - 1] === asteroidSize) {
        result.pop()

        break
      }

      if (result[result.length - 1] > asteroidSize) {
        break
      }

      if (result[result.length - 1] < asteroidSize) {
        result.pop()

        if (
          !result.length ||
          !(asteroid < 0 && result[result.length - 1] > 0)
        ) {
          result.push(asteroid)
          break
        }
      }
    }
  }

  return result
}

export {asteroidCollision}
