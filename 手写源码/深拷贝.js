// function deepClone(source) {
//     if (typeof source === 'object' && source !== null) {
//         // 判断source是数组还是对象
//         let target = source.constructor === Array ? [] : {}
//             // let target = Array.isArray(source) ? [] : {}

//         // 如果key对象是对象的自有属性
//         for (let key in source) {
//             if (source.hasOwnProperty(key)) {
//                 // 引用数据类型的话，会一直往下寻找
//                 if (source[key] && typeof source[key] === 'object') {
//                     target[key] = deepClone(source[key])
//                 } else {
//                     // 基本数据类型，直接复制
//                     target[key] = source[key]
//                 }
//             }
//         }
//         return target
//     }
// }
// let isObject = (source) => (typeof source === 'object' || typeof source === 'function') && source !== null

// function deepClone(source, map = new Map()) {
//     if (map.get(source)) {
//         return source
//     }

//     if (isObject(source)) {
//         map.set(source, true)
//         let target = source.constructor === Array ? [] : {}
//         for (let key in source) {
//             if (source.hasOwnProperty(key)) {
//                 target[key] = deepClone(source[key], map)
//             } else {
//                 target[key] = source[key]
//             }
//         }
//         return target
//     } else {
//         return source
//     }
// }

function deepClone(source, map = new WeakMap()) {
    if (source === null) return source // 如果是Null或者undefined就不拷贝
    if (source instanceof Date) return new Date(source)
    if (source instanceof RegExp) return new RegExp(source)
    if (typeof source !== 'object') return source // 可能是对象或者普通的值，如果是函数就不需要深拷贝
        // 是对象就需要深拷贝
    if (map.has(source)) return map.get(source)
    let target = source.constructor === Array ? [] : {}
    map.set(source, target)

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            target[key] = deepClone(source[key], map)
        }
    }
    return target
}
// const a = { val: 2 };
// a.target = a;
// let newA = deepClone(a);
// console.log(newA)

const obj1 = {
    name: 'init',
    arr: [1, [2, 3], 4],
};
const obj4 = deepClone(obj1) // 一个深拷贝方法
obj4.name = "update";
obj4.arr[1] = [5, 6, 7]; // 新对象跟原对象不共享内存

console.log('obj1', obj1) // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }
console.log('obj4', obj4) // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }