export type TreeNode = {
  val: number
  left?: TreeNode | null 
  right?: TreeNode | null
}

export interface TreeNodeWithParent {
  parent?: TreeNodeWithParent | null
  val: number
  left?: TreeNodeWithParent | null
  right?: TreeNodeWithParent | null
}