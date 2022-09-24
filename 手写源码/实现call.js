Function.prototype.myCall = function(context = window, ...args) {
    // 在context上加一个唯一值不影响context上的属性
    let key = Symbol('key')
        // context为调用的上下文,this此处为函数，将这个函数作为context的方法
    context[key] = this
    let result = context[key](...args)
        // 不删除会导致context属性越来越多
    delete context[key]
    return result
}

function f(a, b) {
    console.log(a + b)
    console.log(this.name)
}
let obj = {
    name: 1
}
f.myCall(obj, 1, 2)
f(1, 2)