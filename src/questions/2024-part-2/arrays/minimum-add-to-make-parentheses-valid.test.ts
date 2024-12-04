import {minAddToMakeValid} from './minimum-add-to-make-parentheses-valid'

test('adds parantheses 1', () => {
    const s = "())"

    expect(minAddToMakeValid(s)).toEqual(1)
})

test('adds parantheses 2', () => {
    const s = "((("

    expect(minAddToMakeValid(s)).toEqual(3)
})

test('adds parantheses 3', () => {
    const s = "((()()())"

    expect(minAddToMakeValid(s)).toEqual(1)
})

test('adds parantheses 4', () => {
    const s = "(ABC)ABBBB)"

    expect(minAddToMakeValid(s)).toEqual(1)
})


