/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

export type NestedInteger = {
  isInteger?: () => boolean
  getInteger?: () => number
  setInteger?: (n: number) => void
  add?: (elem: NestedInteger) => void
  getList?: () => NestedInteger[]
}

function depthSum(nestedList: NestedInteger[]): number {
  function parseNode(node: NestedInteger, level = 1) {
    if (node.isInteger()) {
      return node.getInteger() * level
    }

    return node.getList().reduce((acc, node) => {
      return acc + parseNode(node, level + 1)
    }, 0)
  }

  return nestedList.reduce((acc, node) => {
    return acc + parseNode(node)
  }, 0)
}

export {depthSum}
