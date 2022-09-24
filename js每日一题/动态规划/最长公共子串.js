// 给定两个字符串str1和str2,输出两个字符串的最长公共子串
// 题目保证str1和str2的最长公共子串存在且唯一。 
function LCS(str1, str2) {
    if ((!str1 && !str2) || (!str1 && str2) || (str1 && !str2)) {
        return
    }
    let len1 = str1.length
    let len2 = str2.length
    let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0))
    let maxLen = 0,
        maxLastIndex = 0
    for (let i = 1; i <= len1; i++) {
        let target1 = str1[i - 1]
        for (let j = 1; j <= len2; j++) {
            let target2 = str2[j - 1]
            if (target1 === target2) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                    //如果遇到了更长的子串，要更新，记录最长子串的长度，
                    //以及最长子串最后一个元素的位置
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j]
                    maxLastIndex = i
                }
            } else {
                //递推公式，两个字符不相等的情况
                dp[i][j] = 0
            }
        }
    }
    // console.log(maxLastIndex, maxLen, 'max')
    return str1.slice(maxLastIndex - maxLen, maxLastIndex)
}

// 一维数组，优化动态规划
function LCSOne(str1, str2) {
    let len1 = str1.length,
        len2 = str2.length
    let dp = new Array(len2 + 1).fill(0)
    let maxLen = 0,
        maxLastIndex = 0
    for (let i = 1; i <= len1; i++) {
        let target1 = str1[i - 1]
        for (let j = len2; j > 0; j--) {
            let target2 = str2[j - 1]
            if (target1 === target2) {
                dp[j] = dp[j - 1] + 1
            } else {
                dp[j] = 0
            }
            if (maxLen < dp[j]) {
                maxLen = dp[j]
                maxLastIndex = i
            }
        }
    }
    // console.log(maxLastIndex, 'last', maxLen)
    return str1.slice(maxLastIndex - maxLen, maxLastIndex)
}
let str1 = "1AB2345CD"
let str2 = "12345EF"
let str3 = [1, 2, 3, 2, 1]
let str4 = [3, 2, 1, 4, 7]
console.log(LCS(str1, str2))
console.log(LCSOne(str3, str4))