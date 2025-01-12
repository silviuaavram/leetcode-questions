/**
 * https://leetcode.com/problems/is-subsequence/description
 * 
 * We use 2 indeces, one for s, one for t.
 * We loop while the t index is in range.
 * If both characters match, we also increase the s index.
 * In any case we always increase the t index.
 * At the end, if we reached the end with s, it means it's a subsequence.
 */
function isSubsequence(s: string, t: string): boolean {
    let indexS = 0
    let indexT = 0

    while (indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++
        }

        indexT++
    }

    return indexS === s.length
    
};

export {isSubsequence}