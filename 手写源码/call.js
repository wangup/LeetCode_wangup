Function.prototype.myCall = function(ctx) {
    // console.log('ctx', ctx, arguments)
    ctx = ctx || window
    ctx.fun = this
    let args = [...arguments].slice(1)
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
b.myCall(a, 1, 2)