import {minRemoveToMakeValid} from './minimum-remove-to-make-valid-parentheses'

test('removes minimum number of parantheses 1', () => {
  const s = 'lee(t(c)o)de)'

  expect(minRemoveToMakeValid(s)).toEqual('lee(t(c)o)de')
})

test('removes minimum number of parantheses 2', () => {
  const s = 'a)b(c)d'

  expect(minRemoveToMakeValid(s)).toEqual('ab(c)d')
})

test('removes minimum number of parantheses 3', () => {
  const s = '))(('

  expect(minRemoveToMakeValid(s)).toEqual('')
})
