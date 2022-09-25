Function.prototype.myApply = function(context = window) {
    let key = Symbol('key')
    context[key] = this
    console.log(arguments, 'args')
    let args = arguments[1] || []
    let result = context[key](...args)
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
fn.myApply(obj, [1, 2])