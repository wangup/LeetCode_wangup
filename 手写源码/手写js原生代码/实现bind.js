Function.prototype.myBind = function(context = window) {
    let self = this
    console.log(arguments, 'args') //[Arguments] { '0': { a: 1, b: 2 }, '1': 3 } args
    let args = arguments[1] || []
    let fBind = function() {
        console.log(arguments, 'arguments') // [Arguments] { '0': 4 } arguments
        return self.apply(this instanceof fBind ? this : context, [args, ...Array.prototype.slice.call(arguments)])
    }

    // 保证原函数的原型对象上的属性不丢失
    fBind.prototype = Object.create(this.prototype)
    return fBind

}

function sum(c, d) {
    return this.a + this.b + c + d
}

let obj = { a: 1, b: 2 }

let t = sum.myBind(obj, 3)

console.log(t(4))