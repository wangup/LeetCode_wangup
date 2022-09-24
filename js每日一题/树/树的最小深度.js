function minTree(tree) {
    // 节点为空，则深度为0
    if (!tree) return 0
        // 节点的右孩子和左孩子都为空，则深度为1
    if (!tree.left && !tree.right) return 1
    let minLeft = minTree(tree.left)
    let minRight = minRight(tree.right)
        // 当节点的左右孩子有一个存在，有一个不存在，则minRight和minLeft有一个为0
    if (!tree.left || !tree.right) return minRight + minLeft + 1
        // 当节点的左右孩子都存在，则取
    return Math.min(minLeft, minRight) + 1
}