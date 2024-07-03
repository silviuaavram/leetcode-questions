import {mostVisitedPattern} from './analyze-user-website-visit-pattern'

test('most visited pattern 1', () => {
  const username = [
    'joe',
    'joe',
    'joe',
    'james',
    'james',
    'james',
    'james',
    'mary',
    'mary',
    'mary',
  ]
  const timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const website = [
    'home',
    'about',
    'career',
    'home',
    'cart',
    'maps',
    'home',
    'home',
    'about',
    'career',
  ]

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'home',
    'about',
    'career',
  ])
})

test('most visited pattern 2', () => {
  const username = ['ua', 'ua', 'ua', 'ub', 'ub', 'ub']
  const timestamp = [1, 2, 3, 4, 5, 6]
  const website = ['a', 'b', 'a', 'a', 'b', 'c']

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'a',
    'b',
    'a',
  ])
})

test('most visited pattern 3', () => {
  const username = ['ua', 'ua', 'ua', 'ub', 'ub', 'ub']
  const timestamp = [1, 2, 3, 4, 5, 6]
  const website = ['a', 'b', 'c', 'a', 'b', 'a']

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'a',
    'b',
    'a',
  ])
})

test('most visited pattern 4', () => {
  const username = ['zkiikgv', 'zkiikgv', 'zkiikgv', 'zkiikgv']

  const timestamp = [436363475, 710406388, 386655081, 797150921]

  const website = ['wnaaxbfhxp', 'mryxsjc', 'oz', 'wlarkzzqht']

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'oz',
    'mryxsjc',
    'wlarkzzqht',
  ])
})

test('most visited pattern 5', () => {
  const username = [
    'h',
    'eiy',
    'cq',
    'h',
    'cq',
    'txldsscx',
    'cq',
    'txldsscx',
    'h',
    'cq',
    'cq',
  ]

  const timestamp = [
    527896567, 334462937, 517687281, 134127993, 859112386, 159548699, 51100299,
    444082139, 926837079, 317455832, 411747930,
  ]

  const website = [
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'yljmntrclw',
    'hibympufi',
    'yljmntrclw',
  ]

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'hibympufi',
    'hibympufi',
    'yljmntrclw',
  ])
})
