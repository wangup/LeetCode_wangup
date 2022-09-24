// 被观察
class Subject {
    constructor(name) {
            this.state = name
            this.arr = []
        }
        // 收集所有的观察者
    addArr(dep) {
            this.arr.push(dep)
        }
        //更新被观察者 状态的方法
    notify(newState) {
        this.state = newState
        this.arr.forEach(item => item.update(this))
    }
}
// 观察者
class watcher {
    constructor(name) {
        this.name = name
    }
    update(subject) {
        console.log('当前' + this.name + '我是' + subject.state)
    }
}

let subject = new Subject('学生')

let parent = new watcher('父母')
let teacher = new watcher('老师')

subject.addArr(parent)
subject.addArr(teacher)
subject.notify('更新被观察者')