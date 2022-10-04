export function reverseWords(originalS: string): string {
  let index = 0
  let s = originalS

  while (s[index] === ' ' && index < s.length) {
    index++
  }

  if (index > 0) {
    s = s.slice(index)
  }

  index = s.length - 1

  while (s[index] === ' ' && index > -1) {
    index--
  }

  if (index < s.length - 1) {
    s = s.slice(0, index + 1)
  }

  for (index = 0; index < s.length - 1; index++) {
    if (s[index] === ' ' && s[index + 1] === ' ') {
      s = `${s.slice(0, index)}${s.slice(index + 1)}`

      index-- // stay on this position
    }
  }

  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    const char1 = s.charAt(index)
    const char2 = s.charAt(s.length - 1 - index)

    s = `${s.slice(0, index)}${char2}${s.slice(
      index + 1,
      s.length - 1 - index,
    )}${char1}${s.slice(s.length - index)}`
  }

  let spaceIndeces = []

  for (let index = 0; index < s.length; index++) {
    if (s[index] === ' ') {
      spaceIndeces.push(index)
    }
  }

  spaceIndeces = [-1, ...spaceIndeces, s.length]

  for (let spaceIndex = 0; spaceIndex < spaceIndeces.length - 1; spaceIndex++) {
    const wordStart = spaceIndeces[spaceIndex] + 1
    const wordEnd = spaceIndeces[spaceIndex + 1]

    for (
      let index = wordStart;
      index < Math.floor((wordEnd + wordStart) / 2);
      index++
    ) {
      const char1 = s[index]
      const char2 = s[wordEnd - 1 - (index - wordStart)]

      s = `${s.slice(0, index)}${char2}${s.slice(
        index + 1,
        wordEnd - 1 - (index - wordStart),
      )}${char1}${s.slice(wordEnd - (index - wordStart))}`
    }
  }

  return s
}
