/**
 * Write a function with a signature of
 * (string str, int n) -> string
 * that returns the most frequently occurring substring of length n in str
 *
 * Example:
 * str=“inengineering”
 * n = 2
 * It will have the following substring “in, ne, en, ng, gi, in, ne, ee, er, ri, in, ng”
 * It should return “in
 *
 * n could be larger that str.length
 * IN same as in or In or iN? in, IN, iN. 3. what to return? in.
 * in case of multiple, return the first in terms of indexOf.
 *
 * abcd 2 0 - 2
 * 
 * Hubspot interview.
 */

function mostFrequentlyOcurringSubstring(
  str: string,
  n: number,
): string | null {
  if (n === 0 || n > str.length) {
    return null
  }

  let maximum = 0
  const occurancesMap = new Map<string, number>() // O(n) space
  const lowercasedStr = str.toLowerCase()

  // O(n)
  for (let index = 0; index <= str.length - n; index++) {
    const substring = lowercasedStr.slice(index, index + n)
    const occurances = (occurancesMap.get(substring) ?? 0) + 1

    maximum = Math.max(maximum, occurances)

    occurancesMap.set(substring, occurances)
  }

  
  'abcde...'

  return Array.from(occurancesMap.entries())
    .filter(([_key, value]) => value === maximum)
    .sort( // O(nlogn)
      ([key1, _value1], [key2, _value2]) =>
        lowercasedStr.indexOf(key1) - lowercasedStr.indexOf(key2),
    )[0][0]
}

export {mostFrequentlyOcurringSubstring}