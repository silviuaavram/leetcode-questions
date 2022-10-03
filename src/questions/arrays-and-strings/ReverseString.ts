/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    const aux = s[index]
    s[index] = s[s.length - index - 1]
    s[s.length - index - 1] = aux
  }
}
