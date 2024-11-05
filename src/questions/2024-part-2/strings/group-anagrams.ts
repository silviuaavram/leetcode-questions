/**
 * https://leetcode.com/problems/group-anagrams
 * 
 * For each string, we create a common form by sorting the characters.
 * This form is going to be common between anagrams: ate eat tae are going to have aet.
 * Use the common form as map key, and dump all strings for the common key as value.
 */
function groupAnagrams(strs: string[]): string[][] {
    function getCommonForm(str: string): string {
        return str.split('').sort((a, b) => a < b ? -1 : 1).join('')
    }

    const groupedAnagrams = strs.reduce((acc, str) => {
        const commonForm = getCommonForm(str)

        if (!acc.has(commonForm)) {
            acc.set(commonForm, [])
        }

        acc.get(commonForm).push(str)

        return acc
    }, new Map<string, string[]>())

    return Array.from(groupedAnagrams.values())
};

export {groupAnagrams}