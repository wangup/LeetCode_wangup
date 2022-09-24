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

// 保留树形结构中的组织，保持树形结构返回

function saveTree(tree) {
    return (tree || []).filter((node) => node.type === 'te').map((item) => {
        const { children } = item
        return {
            ...item,
            children: saveTree(children)
        }
    })
}
console.log(saveTree(tree))