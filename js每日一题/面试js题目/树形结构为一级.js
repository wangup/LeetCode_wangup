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

const flattenTree = tree => {
    let list = []
    tree.forEach(node => {
        let { children, ...obj } = node
        list.push(obj)
        if (children && children.length) {
            const childrenList = flattenTree(children)
                // console.log('child', childrenList)
            list.push(...childrenList)
        }
    })
    return list
}

console.log(flattenTree(tree))

const flatten = tree => {
    return (tree || []).reduce((pre, cur) => {
        const { children, ...obj } = cur
        return pre.concat(obj, flatten(children))
    }, [])
}
console.log(flatten(tree))