/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description
 * 
 * We plot the prices on a graph and check its peaks and valleys.
 * In order to maximize profit, we will buy on a valley and sell all the way to the next peak.
 * We add to the result all the gains we get from the slope.
 */
function maxProfit(prices: number[]): number {
    return prices.reduce((acc, _price, index) => {
        if (index > 0) {
            if (prices[index] > prices[index - 1]) {
                acc += (prices[index] - prices[index - 1])
            }
        }
        return acc
    }, 0)
};

export {maxProfit}