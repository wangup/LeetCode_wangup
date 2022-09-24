// 给定一个字符串 s ，请将 s 分割成一些子串，使每个子串都是 回文串 ，返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。
var partition = function(s) {
    let res = [],
        stack = []
    dfs(s, 0, res, stack)
    return res
}

// 先考虑到已经是回文的情况，left之前的已经遍历，left索引到字符串末尾遍历考虑到有回文的字符子串数组
var dfs = function(str, left, res, stack) {
    if (str.length === left) {
        res.push([...stack])
        return
    }
    for (let i = left; i < str.length; i++) {
        if (isPalindrom(str, left, i)) {
            stack.push(str.slice(left, i + 1))
            dfs(str, i + 1, res, stack)
            stack.pop()
        }
    }
}

// 回文判断
var isPalindrom = function(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

// let s = "google"
let s = "aab"
console.log(partition(s))
    // 输入：s = "google"
    // 输出：[["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]