function myFill(num, value, start = 0, end = num.length) {
    for (let i = start; i < end; i++) {
        num[i] = value
    }
    return num
}
Array.prototype.myFill = function(value, start, end) {
    if (this === undefined) {
        throw new TypeError('this is null or not defined')
    }
    if (!this.length || (start && isNaN(start)) || (end && isNaN(end))) {
        this.length = 0
        return this
    }
    if (start > this.length || end < 0) {
        return this
    } else if (start < 0) {
        start = 0
    } else if (end > this.length) {
        end = this.length
    }
    start = start ? start >= 0 ? start : start + this.length : 0
    end = end ? end >= 0 ? end : end + this.length : this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this

}
let num = ["Banana", "Orange", "Apple", "Mango"]
console.log(num.myFill("Runoob", 2, 4))
    // console.log(myFill(num, "Runoob", 2, 3))