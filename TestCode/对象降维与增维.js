const input = {
    'a.b.c': 1,
    'a.b.d': 2,
    'a.e': 3,
    'f': 4,
};
const output = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};

// 一维对象转多维对象
function changeInput(input) {
    let output = {}
    Object.entries(input).forEach(([key, value]) => {
        dfs(key, value, output)
    })
    return output
}
// 将考虑.的左边和右边的键值
const dfs = function(key, value, preKey) {
    if (!key.includes('.')) {
        preKey[key] = value
        return
    }
    let index = key.indexOf('.')
    let leftArr = key.slice(0, index)
    let rightArr = key.slice(index + 1)
    if (!preKey[leftArr]) {
        preKey[leftArr] = {}
    }
    dfs(rightArr, value, preKey[leftArr])
}
console.log(changeInput(input), 'changeInput(input)')



function changeOutput(output) {
    let preKey = '',
        res = {}
    core(output, preKey, res)
    return res
}

function core(output, preKey, res) {
    Object.entries(output).forEach(([key, value]) => {
        let newKey = preKey ? `${preKey}.${key}` : key
        if (value && value instanceof Object) {
            core(value, newKey, res)
        } else {
            res[newKey] = value
        }
    })
}
console.log(changeOutput(output), 'changeOutput(output)')