/**
 * https://leetcode.com/problems/baseball-game/description
 * 
 * We just use a stack to handle operations
 */
function calPoints(operations: string[]): number {
  const record: number[] = []

  for (const operation of operations) {
    const size = record.length

    switch (operation) {
      case 'C':
        record.pop()
        break
      case '+':
        record.push(record[size - 1] + record[size - 2])
        break
      case 'D':
        record.push(record[size - 1] * 2)
        break
      default:
        record.push(Number(operation))
    }
  }

  return record.reduce((acc, num) => acc + num, 0)
}

export {calPoints}
