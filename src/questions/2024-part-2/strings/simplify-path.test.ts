import {simplifyPath} from './simplify-path'

test('simplifies a path 1', () => {
  const path = '/home/'

  expect(simplifyPath(path)).toEqual('/home')
})

test('simplifies a path 2', () => {
  const path = '/home//foo/'

  expect(simplifyPath(path)).toEqual('/home/foo')
})

test('simplifies a path 3', () => {
  const path = '/home/user/Documents/../Pictures'

  expect(simplifyPath(path)).toEqual('/home/user/Pictures')
})

test('simplifies a path 4', () => {
  const path = '/../'

  expect(simplifyPath(path)).toEqual('/')
})

test('simplifies a path 5', () => {
  const path = '/.../a/../b/c/../d/./'

  expect(simplifyPath(path)).toEqual('/.../b/d')
})

test('simplifies a path 6', () => {
  const path = '/a/./b/../../c/'

  expect(simplifyPath(path)).toEqual('/c')
})

test('simplifies a path 7', () => {
  const path = "/a/../../b/../c//.//"

  expect(simplifyPath(path)).toEqual('/c')
})
