/**
 * https://leetcode.com/problems/meeting-rooms-ii/description
 * 
 * We will sort the meetings by start time.
 * Will use an array to store the rooms. We will sort these rooms by meeting end time.
 * If the first meeting room is available, we will remove it from the array (as if it's been freed up).
 * We push the new meeting room and sort them again.
 * Ideally we need a Min Heap instead of array + sort, but don't want to implement it.
*/
function minMeetingRooms(intervals: number[][]): number {
  const sortedIntervals = intervals.sort(
    ([start1], [start2]) => start1 - start2,
  )
  const rooms = []

  for (const interval of sortedIntervals) {
		const [start, end] = interval

		if (rooms[0] <= start) {
			rooms.splice(0, 1)
		}

		rooms.push(end)
		rooms.sort((r1, r2) => r1 - r2)
  }

  return rooms.length
}

export {minMeetingRooms}
