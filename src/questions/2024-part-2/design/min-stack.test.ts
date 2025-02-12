import {MinStack} from './min-stack'

test('min stack 1', () => {
  const minStack = new MinStack()

  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  expect(minStack.getMin()).toEqual(-3) // return -3
  minStack.pop()
  expect(minStack.top()).toEqual(0) // return 0
  expect(minStack.getMin()).toEqual(-2) // return -2
})

test('min stack 2', () => {
  const minStack = new MinStack()

  minStack.push(-2)
  minStack.push(0)
  minStack.push(-1)
  expect(minStack.getMin()).toEqual(-2) // return -2
  expect(minStack.top()).toEqual(-1) // return -1
  minStack.pop()
  expect(minStack.getMin()).toEqual(-2) // return -2
})

test('min stack 3', () => {
  const minStack = new MinStack()

  minStack.push(2147483646)
  minStack.push(2147483646)
  minStack.push(2147483647)
  expect(minStack.top()).toEqual(2147483647)
  minStack.pop()
  expect(minStack.getMin()).toEqual(2147483646)
  minStack.pop()
  expect(minStack.getMin()).toEqual(2147483646)
  minStack.pop()
  minStack.push(2147483647)
  expect(minStack.top()).toEqual(2147483647)
  expect(minStack.getMin()).toEqual(2147483647)
  minStack.push(-2147483648)
  expect(minStack.top()).toEqual(-2147483648)
  expect(minStack.getMin()).toEqual(-2147483648)
  minStack.pop()
  expect(minStack.getMin()).toEqual(2147483647)
})

test('min stack 4', () => {
  const minStack = new MinStack()

  minStack.push(-10)
  minStack.push(14)
  expect(minStack.getMin()).toEqual(-10)
  expect(minStack.getMin()).toEqual(-10)
  minStack.push(-20)
  expect(minStack.getMin()).toEqual(-20)
  expect(minStack.getMin()).toEqual(-20)
  expect(minStack.top()).toEqual(-20)
  minStack.pop()
  minStack.push(10)
  minStack.push(-7)
  expect(minStack.getMin()).toEqual(-10)
  minStack.push(-7)
  minStack.pop()
  expect(minStack.top()).toEqual(-7)
  expect(minStack.getMin()).toEqual(-10)
  minStack.pop()
})
