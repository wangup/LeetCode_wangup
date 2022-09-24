const myInstanceOf = function(left, right) {
    left = left.__proto__
    let mockRight = right.prototype
    while (true) {
        if (left === null) {
            return false
        }
        if (left === mockRight) {
            return true
        }
        left = left.__proto__
    }
}
console.log(myInstanceOf({}, Function))