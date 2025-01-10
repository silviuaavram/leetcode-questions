/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description
 */
function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const toSwitch = []
  const chars = s.split('')

  for (let index = 0; index < s.length; index++) {
    if (vowels.has(s[index].toLowerCase())) {
      toSwitch.push([index])
    }
  }

  for (let index = 0; index < toSwitch.length / 2; index++) {
    const index1 = toSwitch[index]
    const index2 = toSwitch[toSwitch.length - 1 - index]

    chars[index1] = s[index2]
    chars[index2] = s[index1]
  }

  return chars.join('')
}

export {reverseVowels}
