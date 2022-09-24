let num = [1, 2, 3, [4, [5, 6],
    [7, , 4, [10, 11, [12], 1]]
]]

function flatNum(num) {
    return num.reduce((pre, cur) => {
        return pre = cur instanceof Array ? pre.concat(flatNum(cur)) : pre.concat(cur)
    }, [])
}
console.log(flatNum(num), 'flatNum')

function solution(num) {
    let res = [],
        depth = Infinity

    function flatDepth(num, depth) {
        for (let item of num) {
            if (Array.isArray(item) && depth > 0) {
                flatDepth(item, depth - 1)
            } else {
                item && res.push(item)
            }
        }
    }
    flatDepth(num, depth)
    return res
}

console.log(solution(num), 'solution')

// 堆栈实现扁平化
function stackNum(num) {
    let res = [],
        stack = [...num]
    while (stack.length) {
        let node = stack.pop()
        if (Array.isArray(node)) {
            stack.push(...node)
        } else {
            node && res.push(node)
        }
    }
    return res.reverse()
}
console.log(stackNum(num), 'stackNum')

// while+some
function flatten(num) {
    while (num.some(item => Array.isArray(item))) {
        num = [].concat(...num)
    }
    return num
}
console.log(flatten(num), 'flatten')