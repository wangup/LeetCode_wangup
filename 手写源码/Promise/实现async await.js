function afunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("afunc");
        }, 1000);
    });
}

function bfunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bfunc");
        }, 2000);
    });
}


// 生成器是在定义函数时在function后添加 * 定义的， 像这样：
// function* func() {}，
// 执行生成器函数后会得到一个迭代器， 在生成器函数中能支持yield来暂停函数， 直到迭代器调用next方法.同时next能传入一个参数来作为yield的值。
function* generator() {
    let result = yield afunc()
    console.log('result', result)
    let other = yield bfunc()
    console.log('other', other)
}

myAwait(generator)

function myAwait(genner, ...args) {
    // 得到生成器的迭代器
    let iter = genner(...args)
    return new Promise((resolve, reject) => {
        let result // iter每次暂停时得到的结果
            // inner在手动迭代iter
        let inner = function(yield) {
            //开始迭代 将这里的yield当作yield传入生成器
            result = iter.next(yield)
            if (result.done) {
                // 迭代结束
                // 返回Promise
                // 如果已经完成了 就直接resolve这个promise
                // 这个done是在最后一次调用next后才会为true
                // 以本文的例子来说 此时的结果是 { done: true, value: 'success' }
                // 这个result.value也就是generator函数最后的返回值
                resolve(result.value)
            } else {
                // 除了最后结束的时候外，每次调用gen.next()
                // 其实是返回 { value: Promise, done: false } 的结构，
                // 这里要注意的是Promise.resolve可以接受一个promise为参数
                // 并且这个promise参数被resolve的时候，这个then才会被调用

                //如果没有结束 等到promise的结束继续递归
                return Promise.resolve(
                    // 这个result.value对应的是yield后面的promise
                    result.value
                ).then((fulfilled) => {
                    // value这个promise被resove的时候，就会执行next
                    // 并且只要done不是true的时候 就会递归的往下解开promise
                    // 对应gen.next().value.then(value => {
                    //    gen.next(value).value.then(value2 => {
                    //       gen.next()
                    //
                    //      // 此时done为true了 整个promise被resolve了
                    //      // 最外部的test().then(res => console.log(res))的then就开始执行了
                    //    })
                    // })
                    inner(fulfilled)
                })
            }
        }
        inner(); //迭代器第一次不应该传入参数
    })
}

const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

var test = myAwait(
    function* testG() {
        // await被编译成了yield
        const data = yield getData()
        console.log('data: ', data);
        const data2 = yield getData()
        console.log('data2: ', data2);
        return 'success'
    }
)