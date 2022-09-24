// 给定⼀个整数数组 nums ，找到⼀个具有最⼤和的连续⼦数组（⼦数组最少包含⼀个元素），返回其最
// ⼤和。


// 暴力解法
function maxSubArray(num) {
    let len = num.length
    let max = 0,
        sum = 0
    if (len < 2) {
        return num
    }
    for (let i = 0; i < len - 1; i++) {
        let sum = 0
        for (let j = i; j < len; j++) {
            sum += num[j]
            max = Math.max(sum, max)
        }
    }
    return max
}

// 贪心算法:从局部最优到全局
// 当连续序列和为负数时，则将sum清零，重新计算连续和
function maxGrey(num) {
    let max = 0,
        sum = 0
    let len = num.length
    for (let i = 0; i < len; i++) {
        sum += num[i]
        if (sum <= 0) {
            sum = 0
        }
        max = Math.max(sum, max)
    }
    return max
}

// 动态规划
function actionSum(num) {
    let len = num.length
        // dp[i]为i前连续序列之和
    let dp = new Array(len).fill(0)
    let max = 0
    dp[0] = num[0]
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + num[i], num[i])
        max = Math.max(dp[i], max)
    }
    return max
}
let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(num))
console.log(maxGrey(num))
console.log(actionSum(num))