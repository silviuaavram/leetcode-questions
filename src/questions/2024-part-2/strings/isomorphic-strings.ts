/**
 * https://leetcode.com/problems/isomorphic-strings/description
 * 
 * We need a map to keep track of the character mappings between s and t.
 * We also need a set to make sure that before we do a mapping, that character is available.
 */
function isIsomorphic(s: string, t: string): boolean {
  const mappings = new Map<string, string>()
  const charactersTaken = new Set<string>()

  for (let index = 0; index < s.length; index++) {
    if (!mappings.has(s[index])) {
      if (charactersTaken.has(t[index])) {
        return false
      }
      mappings.set(s[index], t[index])
      charactersTaken.add(t[index])
    } else {
      if (mappings.get(s[index]) !== t[index]) {
        return false
      }
    }
  }

  return true
}

export {isIsomorphic}
