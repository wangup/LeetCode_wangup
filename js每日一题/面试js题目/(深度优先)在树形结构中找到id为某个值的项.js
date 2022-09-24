var tree = [{
    id: 1,
    name: 'wmc',
    type: 'te',
    children: [{
        id: 4,
        name: 'wlc',
        type: 'te',
        children: [{
            id: 14,
            name: 'www',
            type: 'sc',
            children: []
        }, {
            id: 141,
            name: 'happy',
            type: 'sc',
            children: [{
                id: 100,
                name: 'world',
                type: 'sc',
                children: []
            }]
        }]
    }]
}, {
    id: 11,
    name: 'wmc111',
    type: 'te',
    children: [{
        id: 41,
        name: 'wlc11',
        type: 'te',
        children: [{
            id: 40,
            name: 'www111',
            type: 'sc',
            children: []
        }]
    }]
}]

function dfs(tree, id) {
    if (!tree || !tree.length) {
        return null
    }
    for (let node of tree) {
        if (node.id == id) {
            return node
        }
        const find = dfs(node.children, id)
        return find
    }
    return null
}

console.log(dfs(tree, 4))