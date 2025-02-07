import { containsNearbyDuplicate } from "./contains-duplicate-ii";

test('has nearby duplicates 1', () => {
    const nums = [1,2,3,1]
    const k = 3

    expect(containsNearbyDuplicate(nums, k)).toEqual(true)
})

test('has nearby duplicates 2', () => {
    const nums = [1,0,1,1]
    const k = 1

    expect(containsNearbyDuplicate(nums, k)).toEqual(true)
})

test('has nearby duplicates 3', () => {
    const nums = [1,2,3,1,2,3]
    const k = 2

    expect(containsNearbyDuplicate(nums, k)).toEqual(false)
})

