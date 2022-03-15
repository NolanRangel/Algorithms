// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// iterate throught the Array
// find the min and store it (updating it if need be)
// find the max but only after the min is found
// once min and max are found, find the difference between the two and return the outcome
// if nothing is higher then the min after its found then return 0

var maxProfit = function (prices) {
    let min = prices[0];
    let profit = 0;


    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min)
    }

    return profit;

}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))
console.log(maxProfit([2, 4, 1]))