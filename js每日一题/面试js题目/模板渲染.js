let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let data = {
    name: '姓名',
    age: 18
}

function render(template, data) {
    // 模板字符串正则
    let reg = /\{\{(\w+)\}\}/
    if (reg.test(template)) { // 判断模板里是否有模板字符串
        // 找到{{}}里的参数
        let temp = reg.exec(template)[1] // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[temp]) // 将第一个模板字符串渲染
        return render(template, data) // 递归的渲染并返回渲染后的结构
    }
    return template // 如果模板没有模板字符串直接返回
}
console.log(render(template, data))