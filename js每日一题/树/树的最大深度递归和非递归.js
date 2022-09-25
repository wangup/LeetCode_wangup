var tree = {
    val: 4, //根节点
    left: {
        val: 2, //结点的值
        left: {
            val: 1,
            left: null,
            right: null,

        },
        right: {
            val: 3,
            left: null,
            right: null,
        }
    },
    right: {
        val: 5,
        left: null,

        right: {
            val: 6,
            left: {
                val: 7,
                left: null,
                right: null,

            },
            right: null,
        },
    },
}

// 递归
function maxDepthRecursion(tree) {
    if (!tree) return 0
    let left = maxDepthRecursion(tree.left) + 1
    let right = maxDepthRecursion(tree.right) + 1
    return left > right ? left : right

}
console.log('maxDepthRecursion', maxDepthRecursion(tree))


// 非递归
function maxNoRecursion(tree) {
    if (!tree) return 0
    let max = 0
    let queue = [tree]
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        max++
    }
    return max
}
console.log('maxNoRecursion', maxNoRecursion(tree))