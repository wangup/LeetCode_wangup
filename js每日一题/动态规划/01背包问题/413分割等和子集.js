// var canPartition = function(nums) {
//     let len = nums.length
//     let sum = 0
//     let maxNum = 0
//     for (let i = 0; i < len; i++) {
//         sum += nums[i]
//         maxNum = Math.max(maxNum, nums[i])
//     }
//     if (sum % 2 === 1) {
//         return false
//     }
//     target = sum / 2
//     if (target < maxNum) {
//         return false
//     }
//     // dp[i][j]表示从0-i行下标选取若干个正整数（可以是0个），是否存在一种选取方案使得被选取的正整数的和等于 j
//     let dp = Array.from(new Array(len + 1), () => new Array(target + 1).fill(false))
//         // let dp = new Array(len + 1).fill(0).map(() => new Array(target + 1).fill(false))

//     for (let i = 0; i <= len; i++) {
//         dp[i][0] = true
//     }
//     for (let i = 1; i <= len; i++) {
//         let num = nums[i - 1]
//         for (let j = 1; j <= target; j++) {
//             if (j < num) {
//                 dp[i][j] = dp[i - 1][j]
//             } else {
//                 dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]
//             }
//         }
//     }
//     return dp[len][target]
// };

function canPartition(nums) {
    let len = nums.length
    let sum = 0
    let maxNum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        maxNum = Math.max(maxNum, nums[i])
    }
    if (sum % 2 === 1) {
        return false
    }
    target = sum / 2
    if (target < maxNum) {
        return false
    }
    // dp[j]表示：是否存在被选的正整数之和等于j
    let dp = new Array(target + 1).fill(false)
    dp[0] = true
    for (let i = 0; i < len; i++) {
        let num = nums[i]
            // 从后向前
        for (let j = target; j >= num; j--) {
            if (dp[target]) {
                return true
            }
            dp[j] = dp[j] || dp[j - num]
        }
    }
    return dp[target]
}
// let nums = [1, 2, 5]
// let nums = [2, 5, 12, 5, 4, 4]
// let nums = [1, 2, 3, 5]
let nums = [2, 2, 3, 5]
    // let nums = [3, 3, 3, 4, 5]
console.log(canPartition(nums))