// 使用TypeScript 实现一个 get 函数来获取它的属性值
const data = {  name: 'tom',  age: 18,  address: '湖南' }
function get<T extends object,K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key]
}
console.log(get(data,'name'))