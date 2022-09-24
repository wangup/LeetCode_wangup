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

function bfs(tree, id) {
    for (let node of tree) {
        if (node.id === id) {
            return node
        }
    }
    const childrens = tree.reduce((pre, cur) => {
        return pre.concat(cur.children || [])
    }, [])
    const res = bfs(childrens, id)
    return res
}
console.log(bfs(tree, 14))