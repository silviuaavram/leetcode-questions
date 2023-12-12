/**
 * https://leetcode.com/problems/task-scheduler-ii/
 */
function taskSchedulerII(tasks: number[], space: number): number {
  const times = new Map<number, number>()
  let totalTime = 0

  for (let index = 0; index < tasks.length; index++) {
    const lastExecutionTIme = times.get(tasks[index])

    if (
      lastExecutionTIme === undefined ||
      totalTime - lastExecutionTIme > space
    ) {
      // if we can perform the task, track the timestamp when we performed it.
      times.set(tasks[index], totalTime)
    } else {
      // otherwise, we will be able to perform it at its timestamp + space + 1 time
      totalTime = lastExecutionTIme + space + 1
      times.set(tasks[index], totalTime)
    }

    // in all cases, time pases by one unit
    totalTime++
  }

  return totalTime
}

export {taskSchedulerII}
