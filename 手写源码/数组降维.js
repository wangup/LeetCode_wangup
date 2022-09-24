function flat(num, result) {
    let len = num.length
    for (let i = 0; i < len; i++) {
        let arr = num[i]
        if (Array.isArray(arr)) {
            flat(arr, result)
        } else {
            result.push(num[i])
        }
    }
    return result
}

function flatArr(num) {
    let result = []
    let len = num.length
    for (let i = 0; i < len; i++) {
        let arr = num[i]
        if (Array.isArray(arr)) {
            result = result.concat(flatArr(arr))
        } else {
            // result = result.concat(arr)
            result.push(arr)
        }
    }
    return result
}

function flatten(num) {
    return num.reduce((pre, cur) => {
        return cur.constructor === Array ? pre.concat(flatten(cur)) : pre.concat(cur)
    }, [])
}

function flatConcat(num, res) {
    let len = num.length
    for (let i = 0; i < len; i++) {
        if (num[i].constructor === Array) {
            res = res.concat(...num[i])
        } else {
            res.push(num[i])
        }
    }
    return res
}
let num = [1, 3, [4, 5],
    [6, 9, [10, 11, [9, [99]]]]
]
console.log('flatArr', flatArr(num))
    // console.log(flat(num, []))
    // console.log(flatten(num))

// 这个只能对付二维数组，多维数组不适用
// console.log(flatConcat(num, []), 'flatConcat')

// 使用 Infinity 作为深度，展开任意深度的嵌套数组
// console.log(num.flat(Infinity))

let str = 'oaaaa'
    // console.log(Object.prototype.toString.call(str))