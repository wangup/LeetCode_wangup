function create(obj) {
    function Fn() {}
    // 将构造函数的prototype指向obj
    Fn.prototype = obj
    return new Fn()
}