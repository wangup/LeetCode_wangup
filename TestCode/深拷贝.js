// function isObject(target) {
//     return (typeof target === 'object' || typeof target === 'function') && target !== null
// }

// function deepClone(source, map = new WeakMap()) {
//     if (source === null) return source // 如果是Null或者undefined就不拷贝
//     if (source instanceof Date) return new Date(source)
//     if (source instanceof RegExp) return new RegExp(source)
//     if (typeof source !== 'object') return source // 可能是对象或者普通的值，如果是函数就不需要深拷贝
//     if (isObject(source)) {

//         if (map.get(source)) return source
//         let target = source.constructor === Array ? [] : {}
//         map.set(source, true)

//         for (let key in source) {
//             if (source.hasOwnProperty(key)) {
//                 // 实现一个递归拷贝
//                 target[key] = deepClone(source[key], map)
//             }
//         }
//         // 是对象就需要深拷贝
//         return target
//     } else {
//         return source
//     }
// }


const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const deepClone = (target, map = new Map()) => {
    if (map.get(target))
        return target;


    if (isObject(target)) {
        map.set(target, true);
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = deepClone(target[prop], map);
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}
const a = { val: 2 };
a.target = a;
let newA = deepClone(a);
console.log(newA)