function myNew(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
    let result = fn.apply(this, args)
    return result instanceof Object ? result : obj
}

function Animal(name) {
    this.name = name;
    console.log(this.name, 'name')
}
let animal = myNew(Animal, 'dog')
console.log(animal)