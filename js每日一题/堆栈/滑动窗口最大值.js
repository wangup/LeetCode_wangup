// 给定一个长度为 n 的数组 num 和滑动窗口的大小 size ，找出所有滑动窗口里数值的最大值。

// 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

// 窗口大于数组长度或窗口长度为0的时候，返回空。

function maxInWindows(num, size) {
    let res = [],
        stack = []
    let len = num.length

    if (len <= 0 || len < size || size <= 0) return []
        // 未形成窗口
    for (let i = 0; i < size; i++) {
        // stack保持单调递增  （把前面体重不足的都压扁了，直到遇到更大的量级才停住）
        while (stack.length && stack[stack.length - 1] < num[i]) {
            stack.pop()
        }
        stack.push(num[i])
    }
    res.push(stack[0])
    for (let i = size; i < len; i++) {
        // num[i - k] 是窗口的左边界 是当前轮要被移出去的  如果这个元素在单调队列中，则直接删除
        if (num[i - size] === stack[0]) stack.pop()
            // stack保持单调递增  （把前面体重不足的都压扁了，直到遇到更大的量级才停住）
        while (stack.length && stack[stack.length - 1] < num[i]) {
            stack.pop()
        }
        // 加入窗口右边界的值
        stack.push(num[i])
            // 当前窗口的最大值
        res.push(stack[0])
    }
    return res
}
// let num = [2, 3, 4, 2, 6, 2, 5, 1],
//     size = 3
let num = [7, 2, 4],
    size = 2
console.log(maxInWindows(num, size))


// 最优解
function solution(num, size) {
    let len = num.length,
        result = []
    if (len === 0 || len < size || size === 0) return []
    for (let i = 0; i < len - size + 1; i++) {
        let stack = []
        for (let j = i; j < i + size; j++) {
            stack.push(num[j])
        }
        result.push(Math.max(...stack))
    }
    return result
}
console.log(solution(num, size))