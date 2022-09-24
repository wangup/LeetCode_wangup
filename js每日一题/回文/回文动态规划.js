// 最长回文子串。对于长度为n的一个字符串A（仅包含数字，大小写英文字母），请设计一个高效算法，计算其中最长回文子串的长度。

// dp[i][j]表示 i 到 j 的子串是否是回文子串
// 每次先判断边界字符是否相等，再取决于上个状态的判断结果

function getLongestPalindrome(strA) {
    if (strA.length < 2) return strA.length
    let len = strA.length
    let dp = Array.from(new Array(len), () => new Array(len))
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    let maxLen = 0,
        start = 0,
        end = 0
    let str = strA.split('')
    for (let right = 1; right < len; right++) {
        for (let left = 0; left <= right; left++) {
            if (str[left] === str[right] && (right - left <= 2 || dp[left + 1][right - 1])) {
                dp[left][right] = true
                if (right - left + 1 >= maxLen) {
                    maxLen = right - left + 1
                    start = left
                    end = right
                }
            }
        }
    }
    return maxLen
}

let str = "ababc"
    // let str = "abbba"
console.log(getLongestPalindrome(str))