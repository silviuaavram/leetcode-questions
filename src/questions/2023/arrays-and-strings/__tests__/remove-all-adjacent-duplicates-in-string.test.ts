import {removeDuplicates} from '../remove-all-adjacent-duplicates-in-string'

test('removes all adjacent duplicates 1', () => {
  const s = 'abbaca'

  expect(removeDuplicates(s)).toEqual('ca')
})

test('removes all adjacent duplicates 2', () => {
  const s = 'azxxzy'

  expect(removeDuplicates(s)).toEqual('ay')
})

test('removes all adjacent duplicates 3', () => {
  const s = 'xabccba'

  expect(removeDuplicates(s)).toEqual('x')
})
