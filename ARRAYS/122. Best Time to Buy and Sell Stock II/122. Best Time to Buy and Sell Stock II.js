// SIMPLE APRROACH
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     // a memoisation array to store the maximum possible profit upto that index
//     // as if there is no profit, we need to return zero
//     // we first fill it with 0
//     let memo = new Array(prices.length).fill(0);

//     var solve(prices, i) {
//         for (let i = 0; i < prices.length; i++) {

//         }
//     } 
// };

var maxProfit = function(prices) {
    // no constraints on the number of transactions
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        // if today's price is more than yesterday's price
        // sell the stock and increment profit
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};

// USING DP
var maxProfit = function(prices) {
    let hold = -Infinity;
    let cash = 0;

    for (let price of prices) {
        let prevCash = cash;
        cash = Math.max(cash, hold + price);  // sell today
        hold = Math.max(hold, prevCash - price); // buy today
    }

    return cash;
};
