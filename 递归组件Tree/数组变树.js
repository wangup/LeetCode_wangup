let obj = [
    { id: 1, father_id: 0, status: 1, name: '生命科学竞赛' },
    { id: 2, father_id: 1, status: 1, name: '野外实习类' },
    { id: 3, father_id: 2, status: 1, name: '植物学' },
    { id: 7, father_id: 1, status: 1, name: '科学研究类' },
    { id: 8, father_id: 7, status: 1, name: '植物学与植物生理学' },
    { id: 9, father_id: 7, status: 1, name: '动物学与动物生理学' },
    { id: 10, father_id: 7, status: 1, name: '微生物学' },
    { id: 11, father_id: 7, status: 1, name: '生态学' },
    { id: 71, father_id: 1, status: 1, name: '添加' },
    { id: 56, father_id: 0, status: 1, name: '考研相关' },
    { id: 57, father_id: 56, status: 1, name: '政治' },
    { id: 58, father_id: 56, status: 1, name: '外国语' }
]

function arrToTree(obj, father_id) {
    return obj.reduce((pre, cur) => {
        if (father_id === cur.father_id) {
            let list = arrToTree(obj, cur.id)
            if (list.length) {
                cur._child = list
            }
            pre.push(cur)
        }
        return pre
    }, [])
}
let father_id = 0
console.log(arrToTree(obj, father_id))