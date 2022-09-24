// 你是一个经验丰富的小偷，准备偷沿街的一排房间，每个房间都存有一定的现金，为了防止被发现，你不能偷相邻的两家，即，如果偷了第一家，就不能再偷第二家；如果偷了第二家，那么就不能偷第一家和第三家。
// 给定一个整数数组nums，数组中的元素表示每个房间存有的现金数额，请你计算在不被发现的前提下最多的偷窃金额。

// 递归+记忆搜索
function rob(nums) {
    let index = find(nums, nums.length - 1, [])
    return index
}

function find(nums, index, cache) {
    if (index === 0) return nums[0]
    if (index === 1) return Math.max(nums[0], nums[1])
    if (cache[index]) return cache[index]
    let pre = find(nums, index - 2, cache) + nums[index]
    let after = find(nums, index - 1, cache)
    cache[index] = Math.max(pre, after)
    return cache[index]
}

// 动态规划，dp[i]为不被发现的前提下最多的偷窃金额。
function robber(nums) {
    if (nums.length === 0) return
    if (nums.length === 1) return nums[0]
    let len = nums.length
    let dp = new Array(len)
    start = nums[0]
    end = Math.max(nums[0], nums[1])
    let maxCount = 0,
        start = 0,
        end = 0
    for (let i = 2; i < len; i++) {
        // dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        maxCount = Math.max(start + nums[i], end)
        start = end
        end = maxCount
    }
    return end
}
let num = [1, 2, 3, 4]
console.log(rob(num))