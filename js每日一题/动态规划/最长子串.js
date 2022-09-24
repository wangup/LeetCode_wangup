// function getLongestPalindrome(A) {
//     let len = A.length
//     if (len < 2) {
//         return len
//     }
//     let dp = new Array(len)
//     for (let i = 0; i < len; i++) {
//         dp[i] = new Array(len).fill(false)
//     }
//     for (let i = 0; i < len; i++) {
//         dp[i][i] = true
//     }
//     let maxLen = 1,
//         begin = 0
//     let strA = A.split('')
//     for (let L = 2; L <= len; L++) {
//         for (let i = 0; i < len; i++) {
//             let j = L + i - 1
//             if (j >= len) {
//                 break
//             }
//             if (strA[i] !== strA[j]) {
//                 dp[i][j] = false
//             } else {
//                 if (j - i < 3) {
//                     dp[i][j] = true
//                 } else {
//                     dp[i][j] = dp[i + 1][j - 1]
//                 }
//             }
//             if (dp[i][j] && j - i + 1 >= maxLen) {
//                 maxLen = j - i + 1
//                 begin = i
//             }
//         }
//     }
//     return maxLen
// }
function getLongestPalindrome(A) {
    let maxStart = 0
    let maxEnd = 0
    let maxLen = 0
    let len = A.length
    if (len < 2) return len
    let dp = Array.from(new Array(len), () => new Array(len))
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    let strA = A.split('')
    for (let right = 1; right < len; right++) {
        for (let left = 0; left <= right; left++) {
            if (strA[left] === strA[right] && (right - left <= 2 || dp[left + 1][right - 1])) {
                dp[left][right] = true
                if (right - left + 1 >= maxLen) {
                    maxLen = right - left + 1
                    maxStart = left
                    maxEnd = right
                }
            }
        }
    }
    return A.slice(maxStart, maxEnd + 1)
}

// let str = "ababc"
let str = "ccbcabaabba"
console.log(getLongestPalindrome(str))