// 创建一个对象
// 在该对象上创建一个缓存列表（调度中心）
// on 方法用来把函数 fn 都加到缓存列表中（订阅者注册事件到调度中心）
// emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
// off 方法可以根据 event 值取消订阅（取消订阅）
// once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）

class eventBus {
    constructor() {
        this.lists = {}
    }
    on(eventType, fn) {
        if (!this.lists.hasOwnProperty(eventType)) {
            this.lists[eventType] = []
        }
        if (typeof fn === 'function') {
            this.lists[eventType].push(fn)
        } else {
            throw new error('缺少回调参数');
        }
        return this
    }
    emit(eventType, ...args) {
        if (this.lists.hasOwnProperty(eventType)) {
            this.lists[eventType].forEach((cb, index, arr) => {
                cb.apply(null, args)
            })
        } else {
            throw new error(`${eventType}事件未注册`)
        }
        return this
    }
    off(eventType, fn) {
        if (!this.lists.hasOwnProperty(eventType)) {
            throw new error(`"${eventType}"事件未注册`)
        } else if (!typeof fn === 'function') {
            throw new error('缺少回调函数')
        } else {
            this.lists[eventType].forEach((cb, index, arr) => {
                if (fn === cb) {
                    arr.splice(index, 1)
                }
            })
        }
        return this
    }
}
let callback = function() {
    console.log('you are so nice');
}
let pubsub = new eventBus();
pubsub.on('completed', (...args) => {
    console.log(args.join(' '));
})
pubsub.on('completed', callback);
pubsub.emit('completed', 'what', 'a', 'fucking day');
pubsub.off('completed', callback);
pubsub.emit('completed', 'what', 'a', 'lucky day');