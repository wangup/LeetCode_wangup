// 它创建一个对象，其中第一个参数就是这个对象的原型，Object.create()提供第二个可选参数，用以对对象的属性进行进一步描述。
// Object.create(proto, [propertiesObject])
Object.prototype.myCreate = function(obj) {
    //创建一个新的构造函数
    function fn() {}
    //构造函数的prototype指向obj
    fn.prototype = obj
    return new fn()
}
console.log(Object.myCreate({ a: 1 }))


// 更详细
Object.create2 = function(proto, propertyObject = undefined) {
    function F() {}
    F.prototype = proto
    const obj = new F()
    if (propertyObject != undefined) {
        Object.defineProperties(obj, propertyObject)
    }
    if (proto === null) {
        // 创建一个没有原型对象的对象，Object.create(null)
        obj.__proto__ = null
    }
    return obj
}

console.log(Object.create2({ a: 1 }))