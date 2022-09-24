let coins = [1, 2, 3, 5]
let amount = 5
    // dp[i] 面额为i兑换最少数的硬币
function solution(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    let res = Infinity
    for (let i = 0; i < dp.length; i++) {
        for (let coin of coins) {
            if (i < coin) continue
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    // return dp
    return dp[amount] = dp[amount] === amount + 1 ? -1 : dp[amount]
}
console.log(solution(coins, amount))