function minMeetingRooms(intervals: number[][]): number {
  let freeRooms = 0
  const busyRooms = []

  intervals.sort(([start1], [start2]) => start1 - start2)

  for (let index = 0; index < intervals.length; index++) {
    const [start, end] = intervals[index]

    for (
      let busyRoomIndex = 0;
      busyRoomIndex < busyRooms.length;
      busyRoomIndex++
    ) {
      if (start >= busyRooms[busyRoomIndex]) {
        busyRooms.splice(busyRoomIndex--, 1)

        freeRooms++
      }
    }

    if (freeRooms) {
      freeRooms--
    }

    busyRooms.push(end)
  }

  return busyRooms.length + freeRooms
}

export {minMeetingRooms}
