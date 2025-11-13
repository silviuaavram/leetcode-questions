import {summaryRanges} from './summary-ranges'

test('generates list of ranges 1', () => {
  const nums = [0, 1, 2, 4, 5, 7]

  expect(summaryRanges(nums)).toEqual(['0->2', '4->5', '7'])
})

test('generates list of ranges 2', () => {
  const nums = [0, 2, 3, 4, 6, 8, 9]

  expect(summaryRanges(nums)).toEqual(['0', '2->4', '6', '8->9'])
})
