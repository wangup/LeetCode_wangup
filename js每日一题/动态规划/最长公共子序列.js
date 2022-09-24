// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

var longestCommonSubsequence = function(text1, text2) {
    if ((!text1 || !text2) || (!text1 && text2) || (!text2 && text1)) {
        return 0
    }
    let len1 = text1.length
    let len2 = text2.length
    let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0))
    for (let i = 1; i <= len1; i++) {
        let target1 = text1[i - 1]
        for (let j = 1; j <= len2; j++) {
            let target2 = text2[j - 1]
            if (target2 === target1) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[len1][len2]
}
let text1 = "ezupkr",
    text2 = "ubmrapg"
console.log(longestCommonSubsequence(text1, text2))