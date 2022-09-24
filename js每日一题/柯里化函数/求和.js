function cur(fn, ...args) {
    // fn需要的参数是否足够
    if (args.length >= fn.length) {
        // 如果够了就直接执行fn返回函数
        return fn(...args)
    }
    // 递归调用
    // 否则，拼接参数，直到fn的参数够了，直接执行fn并返回结果
    return (...reset) => {
        return cur(fn, ...args, ...reset)
    }
}
const add = (x, y, z) => x + y + z
const curAdd = cur(add, 1)
console.log(curAdd(1)(2)(3))
console.log(curAdd(2)(3))
console.log(curAdd(2, 3))