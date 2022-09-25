const tree = {
    name: 'root',
    children: [
        { name: '叶子1-1' },
        { name: '叶子1-2' },
        {
            name: '叶子2-1',
            children: [{
                name: '叶子3-1',
                children: [{
                    name: '叶子4-1',
                    children: [{}]
                }]
            }]
        }
    ]
}


function solution(tree) {
    if (!tree) return 0
    let depth = 0
    let queue = [tree]
    while (queue.length) {
        depth++
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.children) {
                for (let item of node.children) {
                    queue.push(item)
                }
            }
        }
    }
    return depth
}

console.log(solution(tree))