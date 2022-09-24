var data = [{
        parentId: 0,
        id: 1,
        value: '1'
    },
    {
        parentId: 3,
        id: 2,
        value: '2'
    },
    {
        parentId: 0,
        id: 3,
        value: '3'
    },
    {
        parentId: 1,
        id: 4,
        value: '4'
    },
    {
        parentId: 1,
        id: 5,
        value: '5'
    }
];

function objToTree(obj) {
    let map = {},
        res = []
    for (let item of obj) {
        map[item.id] = item
    }
    for (let item of obj) {
        let parent = map[item.parentId]
        if (parent) {
            parent.children = parent.children || []
            parent.children.push(item)
        } else {
            res.push(item)
        }
    }
    return res
}

// console.log(objToTree(data))

let tree = [{
    "parentId": 0,
    "id": 1,
    "value": "1",
    "children": [{
            "parentId": 1,
            "id": 4,
            "value": "4"
        },
        {
            "parentId": 1,
            "id": 5,
            "value": "5"
        },
        {
            "parentId": 1,
            "id": 4,
            "value": "4"
        },
        {
            "parentId": 1,
            "id": 5,
            "value": "5"
        }
    ]
}, {
    "parentId": 0,
    "id": 3,
    "value": "3",
    "children": [{
        "parentId": 3,
        "id": 2,
        "value": "2"
    }, {
        "parentId": 3,
        "id": 2,
        "value": "2"
    }]
}]

function treeToObj(tree) {
    let res = []
    for (let i = 0; i < tree.length; i++) {
        let { children, ...node } = tree[i]
        res.push(node)
        if (children && children.length) {
            let list = treeToObj(children)
            res.push(...list)
        }
    }
    return res
}
console.log(treeToObj(tree, []))

function flattenTree(tree) {
    return (tree || []).reduce((pre, cur) => {
        let { children, ...node } = cur
        return pre.concat(node, flattenTree(children))
    }, [])
}
console.log(flattenTree(tree))