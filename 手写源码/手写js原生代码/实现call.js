Function.prototype.myCall = function(context = window, ...args) {
    // 在context上加一个唯一值不影响context上的属性
    let key = Symbol('key')
        // context为调用的上下文,this此处为函数，将这个函数作为context的方法
    context[key] = this
        // 截取arguments参数列表第一个以外的参数
    let args = Array.prototype.slice.apply(arguments, [1])
        // arguments是参数列表，这里是ES6的解构语法，拿到除第一个参数以外的参数
        // let [, ...args] = arguments
    let result = context[key](...args)
        // 不删除会导致context属性越来越多
    delete context[key]
    return result
}

function fn(a, b) {
    console.log('a+b', a + b)
    console.log(this.name)
}
let obj = {
    name: 'wmc'
}
fn.myCall(obj, 1, 2)