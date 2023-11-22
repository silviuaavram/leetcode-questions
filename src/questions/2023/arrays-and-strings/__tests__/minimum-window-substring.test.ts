import {minWindow} from '../minimum-window-substring'

test('returns the minimum window 1', () => {
  const s = 'ADOBECODEBANC'
  const t = 'ABC'

  expect(minWindow(s, t)).toEqual('BANC')
})

test('returns the minimum window 2', () => {
  const s = 'a'
  const t = 'a'

  expect(minWindow(s, t)).toEqual('a')
})

test('returns the minimum window 3', () => {
  const s = 'a'
  const t = 'aa'

  expect(minWindow(s, t)).toEqual('')
})

test('returns the minimum window 4', () => {
  const s = 'ADOBECODEBANC'
  const t = 'ABCA'

  expect(minWindow(s, t)).toEqual('ADOBECODEBA')
})

test('returns the minimum window 5', () => {
  const s = 'NADOBECODEBANC'
  const t = 'CN'

  expect(minWindow(s, t)).toEqual('NC')
})

test('returns the minimum window 6', () => {
  const s = 'bba'
  const t = 'ab'

  expect(minWindow(s, t)).toEqual('ba')
})
