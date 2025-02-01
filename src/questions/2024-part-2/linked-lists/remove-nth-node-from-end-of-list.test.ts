import { buildList } from "@utils";
import { removeNthFromEnd } from "./remove-nth-node-from-end-of-list";

test('removes nth node from the end 1', () => {
    const head = buildList([1,2,3,4,5])
    const n = 2

    removeNthFromEnd(head, n)

    expect(head.next.next.val).toEqual(3)
    expect(head.next.next.next.val).toEqual(5)
})

test('removes nth node from the end 2', () => {
    const head = buildList([1])
    const n = 1

    const result = removeNthFromEnd(head, n)

    expect(result).toBeNull()
})

test('removes nth node from the end 3', () => {
    const head = buildList([1,2])
    const n = 1

    const result = removeNthFromEnd(head, n)

    expect(result.val).toEqual(1)
    expect(result.next).toBeNull()
})

test('removes nth node from the end 4', () => {
    const head = buildList([1,2])
    const n = 2

    const result = removeNthFromEnd(head, n)

    expect(result.val).toEqual(2)
    expect(result.next).toBeNull()
})

