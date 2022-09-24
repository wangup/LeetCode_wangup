const nodes = [
    { id: 3, name: '节点C', parentId: 1 },
    { id: 6, name: '节点F', parentId: 3 },
    { id: 0, name: 'root', parentId: null },
    { id: 1, name: '节点A', parentId: 0 },
    { id: 8, name: '节点H', parentId: 4 },
    { id: 4, name: '节点D', parentId: 1 },
    { id: 2, name: '节点B', parentId: 0 },
    { id: 5, name: '节点E', parentId: 2 },
    { id: 7, name: '节点G', parentId: 2 },
    { id: 9, name: '节点I', parentId: 5 }
];

function getTree(obj) {
    let map = {}
    let res = []
    obj.forEach(item => map[item.id] = item)
    console.log(map, 'map')
    obj.forEach(item => {
        let parentId = map[item.parentId]
        if (parentId) {
            parentId.children = parentId.children || []
            parentId.children.push(item)
        } else {
            // 当前对象 pid 如果为空, 则为树状结构的根对象
            res.push(item)
        }
    })
    return res
}

console.log(getTree(nodes))