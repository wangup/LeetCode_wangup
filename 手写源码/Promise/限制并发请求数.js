// 收集用户的批量操作（每个操作对应一次请求），待用户操作完成后一次性发出。
// 另外，为了减小服务器的压力，我们还会限制并发数

/**
 * 并发请求限制并发数
 * @param requestFns 并发请求函数数组
 * @param limit 限制最大并发数
 */

// 1.最多同时执行的任务数为10个
// 2.当前任务执行完成后，释放队列空间，自动执行下一个任务
// 3.所有任务添加到任务队列后，自动开始执行任务

function createRequest(i) {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i)
            }, 2000);
        })
    }
}

class TaskQueue {
    constructor() {
        this.max = 10
        this.requestFns = []
            // 重点：让它自动执行
        setTimeout(() => {
            // 等所有的同步任务执行完成，再执行这个
            this.run()
        });
    }
    addTask(task) {
            this.requestFns.push(task)
        }
        // 对任务队列的自动执行的处理
    run() {
        let len = this.requestFns.length
        if (!len) return
            // 确保任务队列的并发数量不超过10
        let minLen = Math.min(len, this.max)
        for (let i = 0; i < minLen; i++) {
            // 开始占用一个任务空间
            this.max--

                // 确保先进先出
                let task = this.requestFns.shift()
                    // task().then(res => {
                    //     console.log(res, 'res')
                    // }).catch(err => {
                    //     console.log(err, 'err')
                    // }).finally(() => {
                    //     // 开始释放一个任务空间
                    //     this.max++
                    //         // 手动调用run函数，让它进行下一个任务的执行
                    //         this.run()
                    // })
            task().finally(() => {
                // 开始释放一个任务空间
                this.max++
                    // 手动调用run函数，让它进行下一个任务的执行
                    this.run()
            })
        }
    }
}

// 模拟一个异步请求函数
function create(delay) {
    return () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve("done");
            }, delay);
        }).then((res) => {
            console.log(res);
        });
}


let taskQueue = new TaskQueue()
for (let i = 0; i < 20; i++) {
    // let task = createRequest(i)
    let task = create(1000)

    taskQueue.addTask(task)
}