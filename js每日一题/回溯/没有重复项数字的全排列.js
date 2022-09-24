// 给出一组数字，返回该组数字的所有排列
// 例如：
// [1,2,3]的所有排列如下
// [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2], [3,2,1].
// （以数字在数组中的位置靠前为优先级，按字典序排列输出。）

// 输入：
// [1,2,3]
// 复制
// 返回值：
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(num) {
    let stack = []
    let visited = [false]
    let res = []
        // permuteCore(num, res, stack, visited)
    core(num, res, stack)
    return res
}

function permuteCore(num, res, stack, visited) {
    if (num.length === stack.length) {
        res.push(stack.slice(0))
        return
    }
    let len = num.length
    for (let i = 0; i < len; i++) {
        if (visited[i]) {
            continue
        }
        visited[i] = true
        stack.push(num[i])
        permuteCore(num, res, stack, visited)
        visited[i] = false
        stack.pop()
    }
}

function core(num, res, stack) {
    if (stack.length === num.length) {
        res.push(stack.slice())
        return
    }
    let len = num.length
    for (let i = 0; i < len; i++) {
        if (stack.includes(num[i])) {
            continue
        }
        stack.push(num[i])
        core(num, res, stack)
        stack.pop()
    }
}
let num = [1, 2, 3]
console.log(permute(num))