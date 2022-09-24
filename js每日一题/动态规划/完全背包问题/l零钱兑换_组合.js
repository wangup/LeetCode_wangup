// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。 
// 题目数据保证结果符合 32 位带符号整数。

// dp[x] 表示金额之和等于 xx 的硬币组合数
let coins = [474, 83, 404, 3],
    amount = 264

// 一维动态规划
// dp(i) 的定义：兑换面额i所需要的最少硬币
// 一维数组的长度是由背包决定的，而不是物体决定的
function changeCoins(amount, coins) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
        // 外层for循环在遍历所有状态的所有取值
    for (let i = 0; i <= amount; i++) {
        // 内层for循环在求所有选择的最小值
        for (let coin in coins) {
            // 子问题无解，跳过
            if (i < coins[coin]) continue
                // 状态转移
            dp[i] = Math.min(dp[i], dp[i - coins[coin]] + 1)
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount]
}
console.log(changeCoins(amount, coins), 'changeCoins')


// 递归+记忆化搜索
function change(amount, coins) {
    let memo = new Array(amount + 1).fill(-666)

    const dfs = function(amount, coins) {
        if (amount === 0) return 0
        if (amount < 0) return -1
        if (memo[amount] !== -666) return memo[amount]
        let res = Infinity
        for (let coin in coins) {
            let subMemo = dfs(amount - coins[coin], coins)
                // 子问题无解则跳过
            if (subMemo === -1) continue
            res = Math.min(subMemo + 1, res)
        }
        memo[amount] = res === Infinity ? -1 : res
        return memo[amount]
    }
    return dfs(amount, coins)
}

console.log(change(amount, coins))