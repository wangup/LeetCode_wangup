/*
    使用闭包将单例封装起来，真实的person类在全局变量
    第二次new Person时只会return第一次创建的Person
    每个Person类都是一个地址，p1===p2 => true
    所以每个对象共享变量，方法
*/
const People = (function() {
    class People {
        constructor(name) {
            this.name = name
        }
    }
    let instance = null
    return function singleTon(...args) {
        if (!instance) {
            instance = new People(...args)
        }
        return instance
    }
})()

const p1 = new People("haha");
const p2 = new People();
console.log(p1)
console.log(p1 === p2)

console.log(p2.name)