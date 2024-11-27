import {NestedInteger, depthSum} from './nested-list-weight-sum'

test('calculates the depth sum 1', () => {
  const list: NestedInteger[] = [
    {
      isInteger() {
        return false
      },
      getList() {
        return [
          {
            isInteger() {
              return true
            },
            getInteger() {
              return 1
            },
          },
          {
            isInteger() {
              return true
            },
            getInteger() {
              return 1
            },
          },
        ]
      },
    },
    {
      isInteger() {
        return true
      },
      getInteger() {
        return 2
      },
    },
    {
      isInteger() {
        return false
      },
      getList() {
        return [
          {
            isInteger() {
              return true
            },
            getInteger() {
              return 1
            },
          },
          {
            isInteger() {
              return true
            },
            getInteger() {
              return 1
            },
          },
        ]
      },
    },
  ]

  expect(depthSum(list)).toEqual(10)
})

test('calculates the depth sum 2', () => {
  const list: NestedInteger[] = [
    {
      isInteger() {
        return true
      },
      getInteger() {
        return 1
      },
    },
    {
      isInteger() {
        return false
      },
      getList() {
        return [
          {
            isInteger() {
              return true
            },
            getInteger() {
              return 4
            },
          },
          {
            isInteger() {
              return false
            },
            getList() {
              return [
                {
                  isInteger() {
                    return true
                  },
                  getInteger() {
                    return 6
                  },
                },
              ]
            },
          },
        ]
      },
    },
  ]

  expect(depthSum(list)).toEqual(27)
})

test('calculates the depth sum 3', () => {
  const list: NestedInteger[] = [
    {
      isInteger() {
        return true
      },
      getInteger() {
        return 0
      },
    },
  ]

  expect(depthSum(list)).toEqual(0)
})
