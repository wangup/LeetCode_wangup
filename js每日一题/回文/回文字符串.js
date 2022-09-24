// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。


var canPermutePalindrome = function(s) {
    let countList = {},
        len = s.length
    let str = s.split('')
    for (let i = 0; i < len; i++) {
        countList[str[i]] = countList[str[i]] ? countList[str[i]] + 1 : 1
    }
    if (Object.keys(countList).length === 1) return true
    let count = 0
    for (let key in countList) {
        if (countList[key] % 2 != 0) {
            count++
        }
    }
    if (count > 1) {
        return false
    }
    return true
}

let s = "tactcoa"
console.log(canPermutePalindrome(s))
    // 输入："tactcoa"
    // 输出：true（排列有"tacocat"、"atcocta"，等等）