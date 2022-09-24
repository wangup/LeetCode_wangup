function objectFlat(obj = {}) {
    let result = {}

    function flatten(item, preKey = '') {
        Object.entries(item).forEach(([key, value]) => {
            console.log('item', key, value, result)
            let newKey = preKey ? `${preKey}.${key}` : key
            if (value && typeof value === 'object') {
                flatten(value, newKey)
            } else {
                result[newKey] = value
            }
        })
    }

    flatten(obj)
    return result
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source))