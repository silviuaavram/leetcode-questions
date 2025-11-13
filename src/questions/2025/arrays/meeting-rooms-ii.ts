/**
 * https://leetcode.com/problems/meeting-rooms-ii/description
 */
function minMeetingRooms(intervals: number[][]): number {
  let totalRooms = 0
  let busyRooms: number[] = []

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0])

  function cleanup(start: number): void {
    for (let index = 0; index < busyRooms.length; index++) {
      const room = busyRooms[index]

      if (room <= start) {
        busyRooms.splice(0, 1)
        index--
      } else {
        break
      }
    }
  }

  function insertBusyRoom(time: number): void {
    let start = 0
    let end = busyRooms.length

    while (start < end) {
      const middle = Math.floor((start + end) / 2)

      if (busyRooms[middle] < time) {
        start = middle + 1
      } else {
        end = middle
      }
    }

    busyRooms.splice(start, 0, time)
  }

  for (const interval of sortedIntervals) {
    const [start, end] = interval

    cleanup(start)

    if (busyRooms.length === totalRooms) {
      totalRooms++
    }

    insertBusyRoom(end)
  }

  return totalRooms
}

export {minMeetingRooms}
