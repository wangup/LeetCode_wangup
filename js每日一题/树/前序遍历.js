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

function preTreeCore(tree, res = []) {
    if (tree) {
        res.push(tree.val)
        preTreeCore(tree.left, res)
        preTreeCore(tree.right, res)
    }
    return res
}
// let res = []
// preTreeCore(tree, res)
// console.log(res)
console.log(preTreeCore(tree))

function preTreeDeep(tree) {
    if (!tree || tree.length === 0) return null
    let stack = [],
        res = []
    while (stack.length || tree) {
        while (tree) {
            res.push(tree.val)
            stack.push(tree)
            tree = tree.left
        }
        tree = stack.pop()

        tree = tree.right
    }
    return res
}

console.log('preTreeDeep', preTreeDeep(tree))