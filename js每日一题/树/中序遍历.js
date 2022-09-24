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

function midTree(tree) {
    let res = []

    function fn(tree) {
        if (tree) {
            fn(tree.left)
            res.push(tree.val)
            fn(tree.right)
        }
    }
    fn(tree)
    return res
}
console.log(midTree(tree))

// 非递归
function midTreeNoDeep(tree) {
    if (!tree || tree.length === 0) {
        return null
    }
    let stack = [],
        res = []
    while (stack.length || tree) {
        while (tree) {
            stack.push(tree)
            tree = tree.left
        }
        tree = stack.pop()
        res.push(tree.val)
        tree = tree.right
    }
    return res
}
console.log(midTreeNoDeep(tree))