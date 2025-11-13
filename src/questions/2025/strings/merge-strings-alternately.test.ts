import { mergeAlternately } from "./merge-strings-alternately";

test('merges strings alternately 1', () => {
  const word1 = "abc"
  const word2 = "pqr"
  
  expect(mergeAlternately(word1, word2)).toEqual('apbqcr')
})

test('merges strings alternately 2', () => {
  const word1 = "ab"
  const word2 = "pqrs"
  
  expect(mergeAlternately(word1, word2)).toEqual('apbqrs')
})

test('merges strings alternately 3', () => {
  const word1 = "abcd"
  const word2 = "pq"
  
  expect(mergeAlternately(word1, word2)).toEqual('apbqcd')
})

