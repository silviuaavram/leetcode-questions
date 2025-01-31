/**
 * https://leetcode.com/problems/minimum-window-substring/description
 * 
 * We use a sliding window and if we keep what chars relevant to t we have in the substring.
 * If we don't have the chars, we slide to the right, add the char, and check again.
 * If we have all the chars, we slide from the left, remove that car, and check again.
 * To keep track what chars from t we contain in the window, we use a map with its chars and number of occurances.
 * If we add a relevant char to the substring, we subtract that char from the map.
 * Also, if we remove a relevant char from the substring, we add that char to the map.
 */
function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return ''
  }

  let result = ''
  const map = new Map<string, number>()

  for (let index = 0; index < t.length; index++) {
    map.set(t[index], (map.get(t[index]) ?? 0) + 1)
  }

  let start = 0
  let end = 0

  while (end <= s.length) {
    if (Array.from(map.values()).reduce((acc, occ) => acc + (occ >= 0 ? occ : 0), 0) > 0){
      const toAdd = s[end]

      if (map.has(toAdd)) {
        map.set(toAdd, map.get(toAdd) - 1)
      }

      end++
    } else {
      if (result === '' || result.length > end - start) {
        result = s.slice(start, end)
      }

      const toRemove = s[start]

      if (map.has(toRemove)) {
        map.set(toRemove, map.get(toRemove) + 1)
      }

      start++
    }
  }

  return result
}

export {minWindow}
