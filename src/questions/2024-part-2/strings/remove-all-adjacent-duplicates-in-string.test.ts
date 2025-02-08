import {removeDuplicates} from './remove-all-adjacent-duplicates-in-string'

test('removes duplicates 1', () => {
  const s = 'abbaca'

  expect(removeDuplicates(s)).toEqual('ca')
})

test('removes duplicates 2', () => {
  const s = 'azxxzy'

  expect(removeDuplicates(s)).toEqual('ay')
})

test('removes duplicates 3', () => {
  const s = 'xyzv'

  expect(removeDuplicates(s)).toEqual('xyzv')
})
