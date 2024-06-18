/**
 * https://leetcode.com/problems/find-all-people-with-secret/description
 */
export function findAllPeople(
  n: number,
  unsortedMeetings: number[][],
  firstPerson: number,
): number[] {
  const meetings = [...unsortedMeetings].sort((m1, m2) => m1[2] - m2[2])
  const hasSecret = new Array(n).fill(false)

  hasSecret[0] = true
  hasSecret[firstPerson] = true

  let currentTime = 0

  const currentMeetings = new Map<number, number[]>()
  const currentVisited = new Set()
  const toVisit = new Set()

  // visits the created graph and updates the hasSecret depending on the connections
  function updateSecret() {
    const iterator = toVisit.values()
    let currentVisit = iterator.next()

    while (!currentVisit.done) {
      const value = currentVisit.value

      if (currentVisited.has(value)) {
        continue
      }

      currentVisited.add(value)
      hasSecret[value] = true

      currentMeetings.get(value).map(moreVisit => {
        toVisit.add(moreVisit)
      })

      currentVisit = iterator.next()
    }

    currentVisited.clear()
    currentMeetings.clear()
    toVisit.clear()
  }

  for (const [person1, person2, time] of meetings) {
    // updates and refreshes the graph at every time change
    if (time > currentTime) {
      currentTime = time

      updateSecret()
    }

    // if one of them has the secret, we will mark it, and add them to be visited in the graph.
    if (hasSecret[person1] || hasSecret[person2]) {
      toVisit.add(person1)
      toVisit.add(person2)

      hasSecret[person1] = true
      hasSecret[person2] = true
    }

    if (!currentMeetings.has(person1)) {
      currentMeetings.set(person1, [])
    }
    if (!currentMeetings.has(person2)) {
      currentMeetings.set(person2, [])
    }

    // draw the connection between them anyway.
    currentMeetings.get(person1).push(person2)
    currentMeetings.get(person2).push(person1)
  }

  // final iteration
  updateSecret()

  return hasSecret.reduce((acc, person, index) => {
    if (person) {
      acc.push(index)
    }

    return acc
  }, [])
}
