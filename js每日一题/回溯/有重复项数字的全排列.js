// 给出一组可能包含重复项的数字，返回该组数字的所有排列。结果以字典序升序排列。
function permuteUnique(num) {
    num = num.sort()
    let res = []
    let path = []
    let visited = [false]
    permuteCore(num, res, path, visited)
    return res
}

function permuteCore(num, res, path, visited) {
    if (num.length === path.length) {
        res.push(path.slice(0))
        return
    }
    let len = num.length
        // 这里的last是为了声明一个last存储上一次的选择，初始化为null，i从0到num.length遍历
    let last = null
    for (let i = 0; i < len; i++) {
        if (visited[i] || num[i] === last) {
            continue
        }
        visited[i] = true
        last = num[i]
        path.push(num[i])
        permuteCore(num, res, path, visited)
        path.pop()
        visited[i] = false
    }
}
let num = [1, 1, 2]
console.log(permuteUnique(num))