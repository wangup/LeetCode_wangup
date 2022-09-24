Function.prototype._bind = function(context, ...args) {
    let self = this //谨记this表示调用bind的函数
    let fBound = function() {
        //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
        return self.apply(this instanceof fBound ? this : context || window, args.concat(Array.prototype.slice.call(arguments)))
    }
    fBound.prototype = Object.create(this.prototype) //保证原函数的原型对象上的属性不丢失
    return fBound
}

function sum(c, d) {
    return this.a + this.b + c + d
}

let obj = { a: 1, b: 2 }

let t = sum._bind(obj, 3)

console.log(t(4))