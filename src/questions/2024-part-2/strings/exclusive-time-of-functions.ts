/**
 * https://leetcode.com/problems/exclusive-time-of-functions/description
 *
 * We use a stack to keep track of previous calls as we iterate through future calls.
 * When a function starts, if there was a previous function running, we update that function total time.
 * The updated total time is this function's start - current time.
 * Then we push this log on the stack and update current time.
 * When a function ends, we pop from the stack, and update that function total time.
 * The updated total time is this function's end - current time + 1.
 * Then we update total time.
 */
function exclusiveTime(n: number, logs: string[]): number[] {
  const runningStack = []
  const times = new Map<string, number>()

  for (let index = 0; index < n; index++) {
    times.set(String(index), 0)
  }

  let currentTime = 0

  for (const log of logs) {
    if (!runningStack.length) {
      runningStack.push(log)

      continue
    }

    const [id, stage, time] = log.split(':')

    if (stage === 'start') {
      const [lastId] = runningStack[runningStack.length - 1].split(':')

      times.set(lastId, times.get(lastId) + Number(time) - currentTime)

      runningStack.push(log)

      currentTime = Number(time)
    } else {
      runningStack.pop().split(':')

      times.set(id, times.get(id) + Number(time) - Number(currentTime) + 1)

      currentTime = Number(time) + 1
    }
  }

  return Array.from(times.values())
}

export {exclusiveTime}
