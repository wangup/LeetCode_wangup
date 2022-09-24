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

// 从树形结构解析出所有的人，平级方式返回
// 输入 tree
// 返回：平级的人，数组
function findType(tree) {
    return (tree || []).reduce((pre, cur) => {
        const { children, type, ...obj } = cur
        if (type === 'sc') {
            return pre.concat(obj)
        }
        const findChildInfo = findType(children)
        if (findChildInfo) {
            return pre.concat(findChildInfo)
        }
    }, [])
}
console.log(findType(tree))