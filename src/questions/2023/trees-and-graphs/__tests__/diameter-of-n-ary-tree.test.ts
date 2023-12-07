import {Node, diameter} from '../diameter-of-n-ary-tree'

test('diameter of n-ary tree 1', () => {
  const root: Node = {
    val: 1,
    children: [
      {
        val: 3,
        children: [
          {val: 5, children: []},
          {val: 6, children: []},
        ],
      },
      {val: 2, children: []},
      {val: 4, children: []},
    ],
  }

  expect(diameter(root)).toEqual(3)
})

test('diameter of n-ary tree 2', () => {
  const root: Node = {
    val: 1,
    children: [
      {
        val: 2,
        children: [
          {
            val: 3,
            children: [{val: 5, children: []}],
          },
          {val: 4, children: [{val: 6, children: []}]},
        ],
      },
    ],
  }

  expect(diameter(root)).toEqual(4)
})

test('diameter of n-ary tree 3', () => {
  const root: Node = {
    val: 1,
    children: [
      {
        val: 2,
        children: [],
      },
      {
        val: 3,
        children: [
          {
            val: 6,
            children: [],
          },
          {
            val: 7,
            children: [
              {
                val: 11,
                children: [
                  {
                    val: 12,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        val: 4,
        children: [
          {
            val: 8,
            children: [{val: 12, children: []}],
          },
        ],
      },
      {
        val: 5,
        children: [
          {
            val: 9,
            children: [{val: 11, children: []}],
          },
          {val: 10, children: []},
        ],
      },
    ],
  }

  expect(diameter(root)).toEqual(7)
})

test('diameter of n-ary tree 4', () => {
  const root: Node = {
    val: 3,
    children: [
      {
        val: 1,
        children: [{val: 5, children: []}],
      },
    ],
  }

  expect(diameter(root)).toEqual(2)
})
