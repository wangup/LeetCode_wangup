Array.prototype.myFill = function(initValue, start = 0, end = this.length) {
    end = end < 0 ? this.length : end
    let res = []
    for (let i = start; i < end; i++) {
        res.push(initValue)
    }
    return res
}
console.log(new Array(10).myFill(1))