// let a = { x: 1 }
// let b = a
// a.y = 2
// console.log(a)
// console.log(b)

// b = { z: 3 }
// console.log(a)
// console.log(b)

// let arr = [1, 2, null]
// let [a1, b1, d = 5] = arr
// console.log(d) // null

// let a = { name: 'abc' }
// let b = a
// b.name = 'ddd'
// let a = [1, 2, 3]
// let b = a
// b[1] = 4
// console.log(a, b)

let num = [1, 2, 3, [4, [5, 6],
    [7, , 4, [10, 11, [12], 1]]
]]

function flatArr(num) {
    let depth = Infinity,
        res = []
    const core = (num, depth) => {
        for (let value of num) {
            if (Array.isArray(value) && depth > 0) {
                flatArr(value, depth - 1)
            } else {
                value && res.push(value)
            }
        }
    }
    core(num, depth)
    return res
}
console.log(flatArr(num))