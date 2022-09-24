// 你是一个经验丰富的小偷，准备偷沿湖的一排房间，每个房间都存有一定的现金，为了防止被发现，你不能偷相邻的两家，即，如果偷了第一家，就不能再偷第二家，如果偷了第二家，那么就不能偷第一家和第三家。沿湖的房间组成一个闭合的圆形，即第一个房间和最后一个房间视为相邻。
// 给定一个长度为n的整数数组nums，数组中的元素表示每个房间存有的现金数额，请你计算在不被发现的前提下最多的偷窃金额。

function rob(nums) {
    if (nums.length === 0) return
    if (nums.length === 1) return nums[0]
    let len = nums.length
    let str1 = nums.slice(1)
    let dp1 = new Array(str1.length)
    let str2 = nums.slice(0, len - 1)
    let dp2 = new Array(str2.length)
        // 第一家
    dp1[0] = str1[0]
    dp1[1] = Math.max(str1[0], str1[1])
    dp2[0] = str2[0]
    dp2[1] = Math.max(str2[0], str2[1])
    for (let i = 2; i < str1.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + str1[i])
    }
    for (let i = 2; i < str2.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + str2[i])
    }
    return Math.max(dp1[str1.length - 1], dp2[str2.length - 1])
}

let nums = [1, 3, 6]
console.log(rob(nums))