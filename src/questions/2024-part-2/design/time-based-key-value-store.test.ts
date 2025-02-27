import {TimeMap} from './time-based-key-value-store'

test('checks a time map 1', () => {
  const timeMap = new TimeMap()

  timeMap.set('foo', 'bar', 1) // store the key "foo" and value "bar" along with timestamp = 1.
  expect(timeMap.get('foo', 1)).toEqual('bar') // return "bar"
  expect(timeMap.get('foo', 3)).toEqual('bar') // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
  timeMap.set('foo', 'bar2', 4) // store the key "foo" and value "bar2" along with timestamp = 4.
  expect(timeMap.get('foo', 4)).toEqual('bar2') // return "bar2"
  expect(timeMap.get('foo', 5)).toEqual('bar2') // return "bar2"
  expect(timeMap.get('foo', 0)).toEqual('') // return ""
})

test('checks a time map 2', () => {
  const timeMap = new TimeMap()

  timeMap.set('love', 'high', 10)
  timeMap.set('love', 'low', 20)
  expect(timeMap.get('love', 5)).toEqual('')
  expect(timeMap.get('love', 10)).toEqual('high')
  expect(timeMap.get('love', 15)).toEqual('high')
  expect(timeMap.get('love', 20)).toEqual('low')
  expect(timeMap.get('love', 25)).toEqual('low')
})

test('checks a time map 3', () => {
  const timeMap = new TimeMap()

  timeMap.set('love', '1', 5)
  timeMap.set('love', '2', 10)
  timeMap.set('love', '3', 15)
  timeMap.set('love', '4', 20)
  timeMap.set('love', '5', 25)
  timeMap.set('love', '8', 30)
  timeMap.set('love', '9', 35)
  timeMap.set('love', '10', 40)
  expect(timeMap.get('love', 13)).toEqual('2')
  expect(timeMap.get('love', 4)).toEqual('')
  expect(timeMap.get('love', 41)).toEqual('10')
  expect(timeMap.get('love', 27)).toEqual('5')
  expect(timeMap.get('love', 35)).toEqual('9')
  expect(timeMap.get('love', 34)).toEqual('8')
})
