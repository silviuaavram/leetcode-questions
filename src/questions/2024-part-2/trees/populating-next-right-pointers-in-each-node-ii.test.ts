import { buildTree } from "@utils";
import { _Node, connect } from "./populating-next-right-pointers-in-each-node-ii";

test('connects binary tree with next right pointers 1', () => {
  const root =  buildTree([1,2,3,4,5,null,7]) as _Node
  const result = connect(root)

  expect(result.next).toBeNull()
  expect(result.left.next).toBe(result.right)
  expect(result.right.next).toBeNull()
  expect(result.left.left.next).toBe(result.left.right)
  expect(result.right.right.next).toBeNull()
  expect(result.left.right.next).toBe(result.right.right)
})

test('connects binary tree with next right pointers 2', () => {
  expect(connect(null)).toBeNull()
})
