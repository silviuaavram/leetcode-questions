import {MyQueue} from './implement-queue-using-stacks'

test('queue operations', () => {
  const myQueue = new MyQueue()

  myQueue.push(1) // queue is: [1]
  myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)

  expect(myQueue.peek()).toEqual(1) // return 1
  expect(myQueue.pop()).toEqual(1) // return 1, queue is [2]
  expect(myQueue.empty()).toEqual(false) // return false

  expect(myQueue.peek()).toEqual(2) // return 2
  expect(myQueue.pop()).toEqual(2) // return 2, queue is []
  expect(myQueue.empty()).toEqual(true) // return true
})
