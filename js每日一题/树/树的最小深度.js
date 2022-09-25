var tree = {
    val: 7, //根节点
    left: {
        val: 9, //结点的值
        left: null,
        right: null
    },
    right: {
        val: 6,
        left: {
            val: 15,
            left: null,
            right: null
        },

        right: {
            val: 8,
            left: null,
            right: null,
        },
    },
}

// 递归实现
function minTree(tree) {
    // 节点为空，则深度为0
    if (!tree) return 0
        // 节点的右孩子和左孩子都为空，则深度为1
    if (!tree.left && !tree.right) return 1
    let minLeft = minTree(tree.left)
    let minRight = minTree(tree.right)
        // 当节点的左右孩子有一个存在，有一个不存在，则minRight和minLeft有一个为0
    if (!tree.left || !tree.right) return minRight + minLeft + 1
        // 当节点的左右孩子都存在，则取
    return Math.min(minLeft, minRight) + 1
}

console.log(minTree(tree))


// 非递归实现
function minRecursion(tree) {
    if (!tree) return 0
    let queue = [tree]
    let min = 0
    while (queue.length) {
        let len = queue.length
        min++
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (!node.left && !node.right) {
                return min
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return min

}
console.log(minRecursion(tree))