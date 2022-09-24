// 给定一个整数数组cost，其中cost[i]是从楼梯第i个台阶向上爬需要支付的费用，
// 下标从0开始，一旦你支付此费用，即可选择向上爬一个或者两个台阶

// 你可以选择从下标为0或者下标为1的台阶开始爬楼梯

// 返回达到楼梯顶部的最低花费

let cost = [10, 15, 20]

function solution(cost) {
    if (cost.length === 0) return 0
    if (cost.length === 1) return cost[0]
    let len = cost.length
    let dp = new Array(len + 1).fill(0)
    dp[0] = 0
    dp[1] = 0
    let res = Infinity
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
            // res = Math.min(res, dp[i])
    }
    return dp[len]
}
console.log(solution(cost))

function solve(cost) {
    let len = cost.length
    if (len < 2) return 0
    let dp = new Array(len).fill(0)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    return Math.min(dp[len - 1], dp[len - 2])
}
console.log(solve(cost))