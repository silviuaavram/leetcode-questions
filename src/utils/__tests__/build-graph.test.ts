import buildGraph from '../build-graph'

test('builds a graph 1', () => {
  const adjList = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]

  const node1 = buildGraph(adjList)
  const node2 = node1.neighbors[0]
  const node3 = node2.neighbors[1]
  const node4 = node1.neighbors[1]

  expect(node1).toEqual(node2.neighbors[0])
  expect(node1).toEqual(node4.neighbors[0])
  expect(node2).toEqual(node1.neighbors[0])
  expect(node2).toEqual(node3.neighbors[0])
  expect(node3).toEqual(node2.neighbors[1])
  expect(node3).toEqual(node4.neighbors[1])
  expect(node4).toEqual(node1.neighbors[1])
})
