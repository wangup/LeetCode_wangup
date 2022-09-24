Function.prototype.myApply = function(ctx) {
    ctx = ctx || window
    ctx.fun = this
    let args = arguments[1] || []
    let result = ctx.fun(...args)
    delete ctx.fun
    return result
}

var a = {
    name: 'wmc',
    fun: function(a, b) {
        console.log(a + b)
    }
}
var b = a.fun
b.myApply(a, [1, 2])