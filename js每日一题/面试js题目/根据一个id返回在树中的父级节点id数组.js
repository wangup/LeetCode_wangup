var tree = [{
    id: 1,
    name: 'wmc',
    children: [{
        id: 4,
        name: 'wlc',
        children: [{
            id: 14,
            name: 'www',
            children: []
        }]
    }]
}, {
    id: 11,
    name: 'wmc111',
    children: [{
        id: 41,
        name: 'wlc11',
        children: [{
            id: 40,
            name: 'www111',
            children: []
        }]
    }]
}]


// 根据一个id返回树中的父节点的ID
function parentIdsWay(tree, id, parentIds = []) {
    if (!tree || tree.length === 0) return null
    for (let node of tree) {
        if (node.id === id) {
            return parentIds
        }
        parentIds.push(node.id)
        const find = parentIdsWay(node.children, id, parentIds)
        parentIds = []
            // const find = parentIdsWay(node.children, id, [...parentIds, node.id])
        if (find) {
            return find
        }
    }
    return null
}
console.log(parentIdsWay(tree, 14))