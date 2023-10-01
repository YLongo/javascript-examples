console.log('JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值。ES6 提供for...of循环，允许遍历获得键值。')
{
    let arr = ['a', 'b', 'c', 'd'];

    for (let a in arr) {
        console.log(a);
    }

    for (let a of arr) {
        console.log(a);
    }
}

console.log('for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性')
{
    let arr = [3, 5, 7];
    arr.foo = 'hello';

    for (let i in arr) {
        console.log(i);
    }

    for (let i of arr) {
        console.log(i);
    }
}