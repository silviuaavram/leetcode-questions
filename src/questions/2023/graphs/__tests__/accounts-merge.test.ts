import {accountsMerge} from '../accounts-merge'

test('merges accounts 1', () => {
  const accounts = [
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]
  const expected = [
    ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]

  expect(accountsMerge(accounts)).toEqual(expect.arrayContaining(expected))
})

test('merges accounts 2', () => {
  const accounts = [
    ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
    ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
    ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
    ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
    ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
  ]
  const expected = [
    ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
    ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
    ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
    ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
    ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
  ]

  expect(accountsMerge(accounts)).toEqual(expect.arrayContaining(expected))
})

test('merges accounts 3', () => {
  const accounts = [
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com', 'john00@mail.com'],
  ]
  const expected = [
    [
      'John',
      'john00@mail.com',
      'john_newyork@mail.com',
      'johnnybravo@mail.com',
      'johnsmith@mail.com',
    ],
    ['Mary', 'mary@mail.com'],
  ]

  expect(accountsMerge(accounts)).toEqual(expect.arrayContaining(expected))
})

test('merges accounts 4', () => {
  const accounts = [
    ['David', 'David0@m.co', 'David4@m.co', 'David3@m.co'],
    ['David', 'David5@m.co', 'David5@m.co', 'David0@m.co'],
    ['David', 'David1@m.co', 'David4@m.co', 'David0@m.co'],
    ['David', 'David0@m.co', 'David1@m.co', 'David3@m.co'],
    ['David', 'David4@m.co', 'David1@m.co', 'David3@m.co'],
  ]
  const expected = [
    [
      'David',
      'David0@m.co',
      'David1@m.co',
      'David3@m.co',
      'David4@m.co',
      'David5@m.co',
    ],
  ]

  expect(accountsMerge(accounts)).toEqual(expect.arrayContaining(expected))
})

test('merges accounts 5', () => {
  const accounts = [
    ['David', 'David0@m.co', 'David1@m.co'],
    ['David', 'David3@m.co', 'David4@m.co'],
    ['David', 'David4@m.co', 'David5@m.co'],
    ['David', 'David2@m.co', 'David3@m.co'],
    ['David', 'David1@m.co', 'David2@m.co'],
  ]
  const expected = [
    [
      'David',
      'David0@m.co',
      'David1@m.co',
      'David2@m.co',
      'David3@m.co',
      'David4@m.co',
      'David5@m.co',
    ],
  ]

  expect(accountsMerge(accounts)).toEqual(expect.arrayContaining(expected))
})
