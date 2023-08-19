
// 使用直接量创建对象，对象的原型是Object.prototype
let machine = {name: 'robot'};
let prototype = Object.getPrototypeOf(machine);
console.log(prototype == Object.prototype);