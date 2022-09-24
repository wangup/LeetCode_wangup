Function.prototype.myApply = function(context = window, ...args) {
    let key = Symbol('key')
    context[key] = this
    let result = context[key](args)
    delete context[key]
    return result
}

function f(a, b) {
    console.log('a:', a, 'b:', b)
    console.log(this.name)
}
let obj = {
    name: 1
}
f.myApply(obj, [1, 2])