function permutation(s) {
    let str = s.split('')
        // case里有'aab'，避免不了重复，因此还使用了Set
    let res = new Set()
    let visited = [false]
    let path = []
    permutationsCore(str, res, path, visited)
    return Array.from(res)
};
// 用一个visited来记录当前使用过的节点，保证（在同一层）同一位置节点不被重复使用
function permutationsCore(str, res, path, visited) {
    if (str.length === path.length) {
        res.add(path.join(''))
        return
    }
    for (let i = 0; i < str.length; i++) {
        //发生剪枝，当访问过这个元素的时候，直接跳过
        if (visited[i]) {
            continue
        }
        //标记同⼀树层str[i]使⽤过，防止同一树支重复使用
        visited[i] = true
        path.push(str[i])
        permutationsCore(str, res, path, visited)
            //回溯，说明同⼀树层str[i]使⽤过，防止下一树层重复
        path.pop()
            // 回溯
        visited[i] = false
    }
}
let s = 'abc'
console.log(permutation(s))

let pre = [3, 4, 5, 6, 3]
pre = pre.slice(0, -2)
console.log(pre)