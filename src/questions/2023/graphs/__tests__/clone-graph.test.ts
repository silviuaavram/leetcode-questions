import {buildGraph} from '@utils'
import {cloneGraph} from '../clone-graph'

test('clones a graph 1', () => {
  const node1 = buildGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ])
  const clone1 = cloneGraph(node1)

  const node2 = node1.neighbors[0]
  const node3 = node2.neighbors[1]
  const node4 = node1.neighbors[1]
  const clone2 = clone1.neighbors[0]
  const clone3 = clone2.neighbors[1]
  const clone4 = clone1.neighbors[1]

  expect(clone1.neighbors).toHaveLength(node1.neighbors.length)
  expect(clone2.neighbors).toHaveLength(node2.neighbors.length)
  expect(clone3.neighbors).toHaveLength(node3.neighbors.length)
  expect(clone4.neighbors).toHaveLength(node4.neighbors.length)

  expect(node1).not.toBe(clone2.neighbors[0])
  expect(node1.val).toEqual(clone2.neighbors[0].val)
  expect(node1).not.toBe(clone4.neighbors[0])
  expect(node1.val).toEqual(clone4.neighbors[0].val)
  expect(node2).not.toBe(clone1.neighbors[0])
  expect(node2.val).toEqual(clone1.neighbors[0].val)
  expect(node2).not.toBe(clone3.neighbors[0])
  expect(node2.val).toEqual(clone3.neighbors[0].val)
  expect(node3).not.toBe(clone2.neighbors[1])
  expect(node3.val).toEqual(clone2.neighbors[1].val)
  expect(node3).not.toBe(clone4.neighbors[1])
  expect(node3.val).toEqual(clone4.neighbors[1].val)
  expect(node4).not.toBe(clone1.neighbors[1])
  expect(node4.val).toEqual(clone1.neighbors[1].val)
})
