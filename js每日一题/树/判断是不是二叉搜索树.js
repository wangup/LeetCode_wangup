// 给定一个二叉树根节点，请你判断这棵树是不是二叉搜索树。

// 二叉搜索树满足每个节点的左子树上的所有节点均小于当前节点且右子树上的所有节点均大于当前节点。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var tree = {
    val: 1, //根节点
    left: {
        val: 2, //结点的值
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
}

// 非递归
// function isValidBST(root) {
//     let result = []

//     function midSort(root) {
//         let stack = [],
//             res = []
//         while (root || stack.length) {
//             while (root) {
//                 stack.push(root)
//                 root = root.left
//             }
//             root = stack.pop()
//             res.push(root.val)
//             root = root.right
//         }
//         return res
//     }
//     result = midSort(root)
//     let len = result.length
//     let node = result[0]
//     for (let i = 1; i < len; i++) {
//         if (node > result[i]) return false
//         node = result[i]
//     }
//     return true
// }
function isValidBST(root) {
    let pre = -Infinity
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
            // 如果中序遍历得到的节点的值小于等于前一个pre，说明不是二叉搜索树
        if (root.val < pre) {
            return false
        }
        pre = root.val
        root = root.right
    }
    return true
}

console.log(isValidBST(tree), '非递归')

// let pre = Integer.MIN_VALUE

function recursion(root) {
    function solution(root, lower, upper) {
        if (!root) return true
        if (root.val < lower || root.val > upper) return false
        return solution(root.left, lower, root.val) && solution(root.right, root.val, upper)
    }
    return solution(root, -Infinity, Infinity)
}
console.log(recursion(tree), '递归')