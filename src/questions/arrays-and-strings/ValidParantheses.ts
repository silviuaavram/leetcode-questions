export function isValid(s: string): boolean {
  const paranthesesQueue: string[] = []

  for (let index = 0; index < s.length; index++) {
    const currentParantheses = s[index]

    if (['(', '[', '{'].includes(currentParantheses)) {
      paranthesesQueue.push(currentParantheses)
    } else {
      if (!currentParantheses.length) {
        return false
      }

      const openParantheses = paranthesesQueue.pop()

      if (currentParantheses === ')' && openParantheses !== '(') {
        return false
      }
      if (currentParantheses === ']' && openParantheses !== '[') {
        return false
      }
      if (currentParantheses === '}' && openParantheses !== '{') {
        return false
      }
    }
  }

  return !paranthesesQueue.length
}
