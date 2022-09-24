    /**
     * 发布订阅模式
     * handles: 事件处理函数集合
     * on: 订阅事件
     * emit: 发布事件
     * off: 删除事件
     **/
    class PubSub {
        constructor() {
            this.handles = {};
        }

        // 订阅事件
        on(eventType, handle) {
            if (!this.handles.hasOwnProperty(eventType)) {
                this.handles[eventType] = [];
            }
            if (typeof handle == 'function') {
                this.handles[eventType].push(handle);
            } else {
                throw new Error('缺少回调函数');
            }
            return this;
        }

        // 发布事件
        emit(eventType, ...args) {
            if (this.handles.hasOwnProperty(eventType)) {
                console.log('emit发布事件1111:', this.handles[eventType])
                this.handles[eventType].forEach((item, key, arr) => {
                    item.apply(null, args);
                })
                console.log('emit发布事件:', this.handles[eventType])
            } else {
                throw new Error(`"${eventType}"事件未注册`);
            }
            return this;
        }

        // 删除事件
        off(eventType, handle) {
            if (!this.handles.hasOwnProperty(eventType)) {
                throw new Error(`"${eventType}"事件未注册`);
            } else if (typeof handle != 'function') {
                throw new Error('缺少回调函数');
            } else {
                this.handles[eventType].forEach((item, key, arr) => {
                    if (item == handle) {
                        arr.splice(key, 1);
                    }
                })
            }
            return this; // 实现链式操作
        }
    }

    // 下面做一些操作
    let callback = function() {
        console.log('you are so nice');
    }
    let pubsub = new PubSub();
    pubsub.on('completed', (...args) => {
        console.log(args.join(' '));
    })
    pubsub.on('completed', callback);
    pubsub.emit('completed', 'what', 'a', 'fucking day');
    pubsub.off('completed', callback);
    pubsub.emit('completed', 'what', 'a', 'lucky day');
    // 控制台打印
    // what a fucking day
    // you are so nice
    // what a lucky day