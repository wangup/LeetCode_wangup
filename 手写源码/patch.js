function createElement(vNode) {
    let tag = vNode.tag // 目标元素ul之类的
    let attrs = vNode.attrs || {} // 属性
    let children = vNode.children || [] // 子节点

    if (!tag) {
        return null
    }
    // 1.创建对应的DOM
    let elem = document.createElement(tag)
        // 2. 给DOM添加属性
    for (let attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    // 3.将子元素添加到目标之上
    children.forEach(function(childVNode) {
        elem.appendChild(createElement(childVNode))
    })
    return elem
}

function updateChildren(vNode, newVNode) {
    let children = vNode.children || [] // 现有节点
    let newChildren = newVNode.children || [] // 新节点
    children.forEach(function(childrenVNode, index) {
        // 循环的每一项
        let newChildrenVNode = newChildren[index]
            // 第一层没有变化
        if (childrenVNode.tag === newChildrenVNode.tag) {
            // 深层次对比 => 递归
            updateChildren(childrenVNode, newChildrenVNode)
        } else {
            // 两者tag不一样
            replaceNode(childrenVNode, newChildrenVNode)
        }
    })
}