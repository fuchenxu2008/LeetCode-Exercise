/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = prices => {
//     let max_profit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let k = i; k < prices.length; k++) {
//             const profit = prices[k] - prices[i];
//             if (profit > max_profit) {
//                 max_profit = profit;
//             }
//         }
//     }
//     return max_profit;
// };

// const maxProfit = prices => {
//     let max_profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         const temp_max = Math.max(...prices.slice(i + 1))
//         max_profit = temp_max - prices[i] > max_profit ? temp_max - prices[i] : max_profit;
//     }
//     return max_profit;
// };


// Answer
const maxProfit = prices => {
    let max_profit = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max_profit) {
            max_profit = prices[i] - min;
        }
    }
    return max_profit;
};

console.log(maxProfit([2, 1, 2, 1, 0, 0, 1]));