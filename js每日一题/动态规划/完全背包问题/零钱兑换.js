// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。




// dp[i][j]的定义：前i个硬币中凑出金额为j，所需要的硬币数量

// 二维动态规划
var coinChange = function(coins, amount) {
    let len = coins.length
        //dp[i][j]:从前i种硬币中组成金额j所需最少的硬币数量
    let dp = Array.from(new Array(len + 1), () => new Array(amount + 1))
        // 初始化（没有任何硬币的情况）：只有 dp[0][0] = 0；其余情况均为无效值。
        // 这是由「状态定义」决定的，当不考虑任何硬币的时候，只能凑出总和为 0 的方案，所使用的硬币数量为 0 
        //dp[i][0] = 0表示从前i个硬币中凑出金额0所需要的硬币数目为0

    //背包容量为0时, 有效, 硬币数为0
    for (let i = 0; i < coins.length; i++) {
        dp[i][0] = 0;
    }
    //当可选硬币为0个时, 结果无效
    for (let j = 0; j <= amount + 1; j++) {
        dp[0][j] = amount + 1
    }
    dp[0][0] = 0
    for (let i = 1; i <= len; i++) { // 遍历硬币
        for (let j = 0; j <= amount; j++) { // 遍历背包
            //不考虑当前硬币的情况
            dp[i][j] = dp[i - 1][j]
            for (let k = 1; coins[i - 1] * k <= j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - coins[i - 1] * k] + k)
            }
        }
    }
    return dp[len][amount] === amount + 1 ? -1 : dp[len][amount]
}

let coins = [474, 83, 404, 3],
    amount = 264
    // let amount = 5,
    //     coins = [1, 2, 5]
console.log(coinChange(coins, amount))

// 一维动态规划
// dp(i) 的定义：兑换面额i所需要的最少硬币

// 一维数组的长度是由背包决定的，而不是物体决定的
var coinChangeDpWay = function(coins, amount) {
    let len = coins.length
    let dp = new Array(amount + 1).fill(Infinity)
        // 重要： 初始化   面额0只需要0个硬币兑换
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                // 背包大于当前硬币

                dp[i] = Math.min(dp[i], dp[i - coin] + 1) //dp[i - coin]： 当前面额i减当前硬币价值所需要的最少硬币
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChangeDpWay(coins, amount))

// 递归
var coinChangeDfs = function(coins, amount) {
    let memo = new Array(amount + 1).fill(-666)
    const dfs = function(coins, amount) {
        if (amount === 0) return 0
        if (amount < 0) return -1
            // 记忆化处理
        if (memo[amount] != -666) return memo[amount]
        let res = Infinity
        for (let coin of coins) {
            const subProblem = dfs(coins, amount - coin)
            if (subProblem === -1) {
                continue
            }
            res = Math.min(res, subProblem + 1)
        }
        memo[amount] = res === Infinity ? -1 : res
        return memo[amount]
    }
    return dfs(coins, amount)
}
console.log(coinChangeDfs(coins, amount))