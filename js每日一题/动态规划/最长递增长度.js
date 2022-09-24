// 给定一个长度为 n 的数组 arr，求它的最长严格上升子序列的长度。
function LIS(arr) {
    let len = arr.length
        // dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列的长度
    let dp = new Array(len + 1).fill(1)
    let max = 0
    for (let end = 0; end < len; end++) {
        for (let start = 0; start < end; start++) {
            if (arr[start] < arr[end]) {
                dp[end] = Math.max(dp[start] + 1, dp[end])
            }
        }
        max = Math.max(dp[end], max)
    }
    return max
}

let arr = [6, 3, 1, 5, 2, 3, 7]
    // let arr = [7, 7, 7, 7, 7, 7, 7]
    // let arr = [0, 1, 0, 3, 2, 3]
console.log(LIS(arr))