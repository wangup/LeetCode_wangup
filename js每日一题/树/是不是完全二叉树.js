var tree = {
    val: 1, //根节点
    left: {
        val: 2, //结点的值
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        // left: {
        //     val: 5,
        //     left: null,
        //     right: null
        // },
        left: null,
        right: {
            val: 6,
            left: null,
            right: null,
        },
    },
}

function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
}

function isCompleteTree(root) {
    if (!root) return true
    let queue = [root]
    let flag = false
    while (root || queue.length) {
        root = queue.shift()
        if (!root) {
            flag = true
        } else {
            if (flag) {
                return false
            }
            queue.push(root.left)
            queue.push(root.right)
        }
    }
    return true
}
console.log(isCompleteTree(tree))


// 递归
// 编号(node.left)=2×i
// 编号(node.right)=2×i+1
// 因此我们同时进行两个计数操作
// 计数当前遍历访问的节点是第几个节点
// 计数在完全二叉树中，当前访问的节点在完全二叉树中的编号
// 如果最终得到的两个值相同，说明该树是一棵完全二叉树
// 如果最终得到的两个值不同，说明该树不是一棵完全二叉树
function solution(root) {
    let ans = 0

    function dfs(root, id) {
        if (!root) return 0
        ans = Math.max(ans, id)
        return 1 + dfs(root.left, 2 * id) + dfs(root.right, 2 * id + 1)
    }
    return dfs(root, 1) === ans
}
console.log(solution(tree), '深度遍历')