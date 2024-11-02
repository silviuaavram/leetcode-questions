/**
 * https://leetcode.com/problems/task-scheduler/description
 *
 * Groups tasks and creates for each task an object with count and lastExecuted.
 * Get the list of objects and sort them by count. We want to execute the task with the largest count, if possible.
 * While there are still tasks, try to execute a task in order.
 * If there is still count, decrement it and update lastExecuted.
 * At the end, sort them again by count.
 * The sorting is just one way to "implement" a priority queue for tasksList. Creating the priority queue would improve complexity.
 */
function leastInterval(tasks: string[], n: number): number {
  const tasksMap = new Map<
    string,
    {count: number; lastExecuted: number | undefined}
  >()

  for (const task of tasks) {
    if (!tasksMap.has(task)) {
      tasksMap.set(task, {count: 0, lastExecuted: undefined})
    }
    tasksMap.get(task).count++
  }

  const tasksList = Array.from(tasksMap.values()).sort(
    (a, b) => b.count - a.count,
  )

  let time = 0

  while (tasksList.length) {
    for (const currentTask of tasksList) {
      const {lastExecuted, count} = currentTask

      if (lastExecuted === undefined || time - lastExecuted > n) {
        if (count === 1) {
          tasksList.splice(tasksList.indexOf(currentTask), 1)
        } else {
          currentTask.count--
          currentTask.lastExecuted = time
        }

        break
      }
    }
    tasksList.sort((a, b) => b.count - a.count)

    time++
  }

  return time
}

export {leastInterval}
