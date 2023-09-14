export function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap = new Map<string, string[]>()

  function getAnagram(str: string): string {
    const anagram = new Array(26).fill(0)

    for (let index = 0; index < str.length; index++) {
      const indexInAnagram = str[index].charCodeAt(0) - 97

      anagram[indexInAnagram]++
    }

    return anagram.join('-')
  }

  for (let index = 0; index < strs.length; index++) {
    const anagram = getAnagram(strs[index])

    anagramsMap.set(anagram, [...(anagramsMap.get(anagram) ?? []), strs[index]])
  }

  return Array.from(anagramsMap.values())
}
