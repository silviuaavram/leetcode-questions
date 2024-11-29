import {LRUCache} from './lru-cache'

test('uses a LRU cache 1', () => {
  const lRUCache = new LRUCache(2)

  lRUCache.put(1, 1) // cache is {1=1}
  lRUCache.put(2, 2) // cache is {2=2, 1=1}
  expect(lRUCache.get(1)).toEqual(1) // return 1

  lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  expect(lRUCache.get(2)).toEqual(-1) // returns -1 (not found)

  lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}

  expect(lRUCache.get(1)).toEqual(-1) // return -1 (not found)
  expect(lRUCache.get(3)).toEqual(3) // return 3
  expect(lRUCache.get(4)).toEqual(4) // return 4

  lRUCache.put(5, 5)

  expect(lRUCache.get(3)).toEqual(-1)
  expect(lRUCache.get(4)).toEqual(4)

  lRUCache.put(5, 10)

  expect(lRUCache.get(4)).toEqual(4)
  expect(lRUCache.get(5)).toEqual(10)
})

test('uses a LRU cache 2', () => {
  const lRUCache = new LRUCache(2)

  lRUCache.put(2, 1) // cache is {2=1}
  lRUCache.put(1, 1) // cache is {1=1, 2=1}
  lRUCache.put(2, 3) // cache is {2=3, 1=1}
  lRUCache.put(4, 1) // cache is {4=1, 2=3}

  expect(lRUCache.get(1)).toEqual(-1)
  expect(lRUCache.get(2)).toEqual(3)
})

test('uses a LRU cache 3', () => {
  const lRUCache = new LRUCache(2)

  lRUCache.put(2, 1) // cache is {2=1}
  lRUCache.put(3, 2) // cache is {3=2, 2=1}

  expect(lRUCache.get(3)).toEqual(2) // cache is {3=2, 2=1}
  expect(lRUCache.get(2)).toEqual(1) // cache is {2=1, 3=2}

  lRUCache.put(4, 3) // cache is {4=3, 2=1}

  expect(lRUCache.get(2)).toEqual(1)
  expect(lRUCache.get(3)).toEqual(-1)
  expect(lRUCache.get(4)).toEqual(3)

})
