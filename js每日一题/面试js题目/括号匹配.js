function isBalanced(str) {
    let map = {
        '{': 1,
        '}': -1,
        '(': 2,
        ')': -2,
        '[': 3,
        ']': -3
    }
    let res = new Map(),
        sum = 0
    for (let i in str) {
        if (!res.has(-map[str[i]]) && map[str[i]] < 0) {
            return false
        }
        sum += map[str[i]]
        res.set(map[str[i]], str[i])
    }
    return sum === 0
}
var str1 = '{[]}()'
var str2 = ')({[]}()'
var str3 = '{[()[]]}'
var str4 = '{(]()[])}'
console.log(isBalanced(str1), 'str1')
console.log(isBalanced(str2), 'str2')
console.log(isBalanced(str3), 'str3')
console.log(isBalanced(str4), 'str4')


// 1.先考虑'{'、'(' 、'['，如果是则进栈，如果不是就出栈，取返回的值（'{'、'(' 、'['）与map对象的value相比
// 2.如果遍历当前的值与map返回的cur键的值作对比，不相等则为false,假设当前值'}'，栈返回的'}'
function solution(str) {
    if (str.length % 2 === 1) return false
    let map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
            stack.push(str[i])
        } else {
            let cur = stack.pop()
                // 不懂，很妙的想法
            if (str[i] !== map[cur]) {
                return false
            }
        }
    }
    if (stack.length) return false
    return true
}

console.log(solution(str1), 'str1')
console.log(solution(str2), 'str2')
console.log(solution(str3), 'str3')
console.log(solution(str4), 'str4')