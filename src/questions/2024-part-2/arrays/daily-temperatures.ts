/**
 * https://leetcode.com/problems/daily-temperatures/description
 *
 * We use a stack to save indeces of temperatures that wait for a warmer value.
 * For each temperature, we will pop lower temperature indeces from the stack.
 * We save the result for that index the difference between the index of the warmer temperature and itself.
 * After the stack popping, we push the temperature index for further processing.
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const temperatureIndeces = []
  const result = new Array(temperatures.length).fill(0)

  for (let index = 0; index < temperatures.length; index++) {
    const currentTemperature = temperatures[index]

    while (
      temperatureIndeces.length &&
      currentTemperature >
        temperatures[temperatureIndeces[temperatureIndeces.length - 1]]
    ) {
      const lastTemperatureIndex = temperatureIndeces.pop()

      result[lastTemperatureIndex] = index - lastTemperatureIndex
    }

    temperatureIndeces.push(index)
  }

  return result
}

export {dailyTemperatures}
