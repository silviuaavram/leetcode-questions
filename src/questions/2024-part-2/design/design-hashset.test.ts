import {MyHashSet} from './design-hashset'

test('creates a hash set', () => {
  const myHashSet = new MyHashSet()
  myHashSet.add(1) // set = [1]
  myHashSet.add(2) // set = [1, 2]
  expect(myHashSet.contains(1)).toEqual(true) // return True
  expect(myHashSet.contains(3)).toEqual(false) // return False, (not found)
  myHashSet.add(2) // set = [1, 2]
  expect(myHashSet.contains(2)).toEqual(true) // return True
  myHashSet.remove(2) // set = [1]
  expect(myHashSet.contains(2)).toEqual(false) // return False, (already removed)
})
