// dp[j]中j代表背包容量，dp[j]表示能找到的最接近背包容量j的和

// 外层循环表示当前放入的数，内层循环用来不断减小背包的容量求得不同容量下最接近背包容量的和

// 状态转移方程为:
// 最接近j的和 = Math.max(以前算出的最接近j的和，当前放入的数+最接近j-num[i]的和)
// 即：dp[j] = Math.max(dp[j],nums[i]+dp[j-nums[i]])

function bag_way(weight, value, bagWeight) {
    let dp = new Array(bagWeight + 1).fill(0)
    let len = weight.length
    for (let i = 0; i < len; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    return dp[bagWeight]
}
let bagWeight = 4
let weight = [1, 3, 4],
    value = [15, 20, 30]
console.log(bag_way(weight, value, bagWeight))