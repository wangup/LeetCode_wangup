// 有一个对象：内容如下：请写程序找出所有d的值：
// var x = {y:{c:{d:1}},z:{e:{d:2}},q:{f:{d:3}},o:{m:{g:{h:{d:4}}}}}
var x = { y: { c: { d: 1 } }, z: { e: { d: 2 } }, q: { f: { d: 3 } }, o: { m: { g: { h: { d: 4 } } } } }

function findX(x, res) {
    if (!x) return
    for (let item in x) {
        if (x['d']) {
            res.push(x['d'])
            return res
        }
        findX(x[item], res)
    }
    return
}
let res = []
findX(x, res)
console.log(res)