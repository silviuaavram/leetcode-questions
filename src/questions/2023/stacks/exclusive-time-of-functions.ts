/**
 * https://leetcode.com/problems/exclusive-time-of-functions/
 */
function exclusiveTime(n: number, logs: string[]): number[] {
  const times: number[] = new Array(n).fill(0)
  const stack: string[] = []
  let currentTime: number

  // always update the currentTime after handling a function.
  for (const log of logs) {
    const [id, action, timeString] = log.split(':')
    const time = Number(timeString)

    if (action === 'start') {
      if (stack.length) {
        const lastId = stack[stack.length - 1]

        times[lastId] += time - currentTime // use the currentTime to calculate the function running time
      }

      stack.push(id)

      currentTime = Number(time)
    } else {
      const lastId = stack.pop()

      times[lastId] += time - currentTime + 1 // use the currentTime to calculate the function running time

      currentTime = Number(time) + 1
    }
  }

  return times
}

export {exclusiveTime}
