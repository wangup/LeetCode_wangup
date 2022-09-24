function isPalindrome(word) {
    let len = word.length
    let str = word.split('')
    let stack = []
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < len; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else {
            let node = stack.pop()
                // let temp = stack[stack.length - 1]
            if (map[node] !== str[i]) {
                return false
            }
        }
    }
    return stack.length === 0
}
// let word = '[{()}]'
let word = '[{(})]'
console.log(isPalindrome(word))
console.log(typeof undefined)