/**
 * https://leetcode.com/problems/plates-between-candles/description
 *
 * We cache all the information when we iterate through the characters.
 * For each position, we cache:
 * 1. the number of plates until that position.
 * 2. the index of the closest candle to its left.
 * 3. the index of the closest chandle to its right.
 * For each query, we get the candle indeces.
 * If either index is undefined (no candle) we return 0.
 * If the candle tot the left has an index larger than the candle to the right, we return 0.
 * Otherwise we return the plates by dividing the plates prefix sums from right candle and left candle.
 */
function platesBetweenCandles(s: string, queries: number[][]): number[] {
  const plates = s.split('').reduce((acc, char, index) => {
    acc.push(char === '|' ? acc[index - 1] ?? 0 : (acc[index - 1] ?? 0) + 1)

    return acc
  }, [])
  const candlesToTheLeft = s.split('').reduce((acc, char, index) => {
    acc.push(char === '|' ? index : acc[index - 1])

    return acc
  }, [])
  const candlesToTheRight = s
    .split('')
    .reverse()
    .reduce((acc, char, index) => {
      acc.push(char === '|' ? index : acc[index - 1])

      return acc
    }, [])
    .reverse()
    .map(index => (index === undefined ? undefined : s.length - 1 - index))

  const result = []

  for (const [start, end] of queries) {
    const candleStart = candlesToTheRight[start]
    const candleEnd = candlesToTheLeft[end]

    if (
      candleStart === undefined ||
      candleEnd === undefined ||
      candleEnd - candleStart <= 0
    ) {
      result.push(0)

      continue
    }

    result.push(plates[candleEnd] - plates[candleStart])
  }

  return result
}

export {platesBetweenCandles}
