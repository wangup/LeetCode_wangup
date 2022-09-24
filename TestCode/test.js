var a = 10

const obj = {
    a: 20,
    foo: function() {
        console.log(this.a, '1')

        return function() {
            console.log(this.a, '2')
        }
    }
}

obj.foo()() // 20 10
const fn = obj.foo
fn() // 10


let arr = [1, 4, 5, 6, 7]
console.log('arr', arr.pop())