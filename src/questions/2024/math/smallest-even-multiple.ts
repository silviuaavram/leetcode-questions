/**
 * https://leetcode.com/problems/smallest-even-multiple/
 */
export function smallestEvenMultiple(n: number): number {
    if (n < 3) {
        return 2
    }

    if (n % 2 === 0) {
        return n
    }

    return n * 2
};