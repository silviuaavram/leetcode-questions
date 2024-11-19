import {maxProfit} from './best-time-to-buy-and-sell-stock-ii'

test('gets max profit from stocks 1', () => {
    const prices = [7,1,5,3,6,4]

    expect(maxProfit(prices)).toEqual(7)
})

test('gets max profit from stocks 2', () => {
    const prices = [1,2,3,4,5]

    expect(maxProfit(prices)).toEqual(4)
})

test('gets max profit from stocks 3', () => {
    const prices = [7,6,4,3,1]

    expect(maxProfit(prices)).toEqual(0)
})

