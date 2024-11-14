import {removeSubfolders} from './remove-sub-folders-from-the-filesystem'

test('removes subfolders 1', () => {
  const folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']

  expect(removeSubfolders(folder)).toEqual(
    expect.arrayContaining(['/a', '/c/d', '/c/f']),
  )
})

test('removes subfolders 2', () => {
  const folder = ['/a', '/a/b/c', '/a/b/d']

  expect(removeSubfolders(folder)).toEqual(expect.arrayContaining(['/a']))
})

test('removes subfolders 3', () => {
  const folder = ['/a/b/c', '/a/b/ca', '/a/b/d']

  expect(removeSubfolders(folder)).toEqual(
    expect.arrayContaining(['/a/b/c', '/a/b/ca', '/a/b/d']),
  )
})

test('removes subfolders 4', () => {
  const folder = ['/a/b/c', '/a/b', '/a/b/d']

  expect(removeSubfolders(folder)).toEqual(
    expect.arrayContaining(['/a/b']),
  )
})

test('removes subfolders 5', () => {
  const folder = ['/a/b/c', '/b/a/c', '/c/b']

  expect(removeSubfolders(folder)).toEqual(
    expect.arrayContaining(folder),
  )
})

