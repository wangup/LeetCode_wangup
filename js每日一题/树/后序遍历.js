const tree = {
    val: '1',
    left: {
        val: '2',
        left: { val: '4', left: null, right: null },
        right: { val: '5', left: null, right: null }
    },
    right: {
        val: '3',
        left: { val: '6', left: null, right: null },
        right: { val: '7', left: null, right: null }
    }
}

function afterDeep(tree) {
    let res = []

    function core(tree) {
        if (tree) {
            core(tree.left)
            core(tree.right)
            res.push(tree.val)
        }
    }
    core(tree)
    return res
}
console.log(afterDeep(tree))

// 非递归
function afterNoDeep(tree) {
    if (!tree) {
        return tree
    }
    let stack = [],
        res = [],
        last = null
    while (stack.length > 0 || tree) {
        while (tree) {
            stack.push(tree)
            tree = tree.left
        }
        // tree = stack[stack.length - 1]

        // // 右节点为空，或者右节点不为空，但是已经被访问过，所以不用存储这个右孩子
        // if (!tree.right || tree.right === last) {
        //     tree = stack.pop()
        //     res.push(tree.val)
        //         // 标记这个节点已经访问过了
        //     last = tree
        //     tree = null
        // } else {
        //     tree = tree.right
        // }
        tree = stack.pop()
        if (!tree.right || tree.right === last) {
            // 右节点为空，或者右节点不为空，但是已经被访问过，所以不用存储这个右孩子
            res.push(tree.val)
                // 标记这个节点已经访问过了
            last = tree
            tree = null
        } else {
            stack.push(tree)
            tree = tree.right
        }
    }
    return res
}
console.log('afterNoDeep', afterNoDeep(tree))