// 对于一个长度为 n 字符串，我们需要对它做一些变形。

// 首先这个字符串中包含着一些空格，就像"Hello World"一样，然后我们要做的是把这个字符串中由空格隔开的单词反序，同时反转每个字符的大小写。

// 比如"Hello World"变形后就变成了"wORLD hELLO"。

// 输入：
// "This is a sample",16
// 返回值：
// "SAMPLE A IS tHIS"

function trans(s, n) {
    let arr = reverseArr(s)
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let strLen = arr[i].length
        let temp = arr[i].split('')
        for (let j = 0; j < strLen; j++) {
            if (temp[j] === temp[j].toUpperCase()) {
                temp[j] = temp[j].toLowerCase()
            } else if (temp[j] === temp[j].toLowerCase()) {
                temp[j] = temp[j].toUpperCase()
            }
        }
        arr[i] = temp.join('')
    }
    return arr.join(' ')
}

function reverseArr(s) {
    let arr = s.split(' ')
    let len = arr.length
    let right = len - 1
    for (let i = 0; i < Math.floor(len / 2); i++) {
        [arr[i], arr[right]] = [arr[right], arr[i]]
        right--
    }
    return arr
}
let s = "This is a sample",
    n = 16
console.log(trans(s, n))

// 简易版，时间度为o(n)，用进栈出栈解决问题

function solution(s, n) {
    let stack = []
    s += ' '
    let len = s.length,
        arr = ''
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') {
            stack.push(arr)
            arr = ''
        } else {
            if (s[i] === s[i].toUpperCase()) {
                let temp = s[i].toLowerCase()
                arr += temp
            } else if (s[i] === s[i].toLowerCase()) {
                let temp1 = s[i].toUpperCase()
                arr += temp1
            }
        }
    }
    let res = []
    while (stack.length) {
        let node = stack.pop()
        res.push(node)
    }
    return res.join(' ')
}
console.log(solution(s, n))