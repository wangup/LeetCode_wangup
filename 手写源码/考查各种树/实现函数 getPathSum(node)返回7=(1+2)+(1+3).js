// 实现函数 getPathSum(node)返回7=(1+2)+(1+3)
var node = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

function getPathSum(node) {
    let total = 0
    let left = [],
        right = []

    function dfs(node, flag) {
        if (!node) return
        if (flag === 0) {
            // 表示根节点
            left.push(node.val)
            right.push(node.val)
            total = node.val + node.val
        }
        if (flag === 1) {
            // 左
            left.push(node.val)
            total += node.val
        }
        if (flag === 2) {
            // 右
            right.push(node.val)
            total += node.val
        }
        dfs(node.left, 1)
        dfs(node.right, 2)
    }
    dfs(node, 0)
    return `${total}=(${left.join('+')})+(${right.join('+')})`

}
console.log(getPathSum(node))