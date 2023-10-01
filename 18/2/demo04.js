console.log('为对象添加 Iterator 接口')
{
    let obj = {
        data: ['hello', 'world'],
        [Symbol.iterator]() {
            const self = this;
            let index = 0;
            return {
                next() {
                    if (index < self.data.length) {
                        return {
                            value: self.data[index++],
                            done: false
                        };
                    }
                    return {value: undefined, done: true};
                }
            };
        }
    };
    const ite = obj[Symbol.iterator]();
    console.log(ite.next());

    for (const e of obj) {
        console.log(e)
    }
}

console.log('\n对于类似数组的对象（存在数值键名和length属性），部署 Iterator 接口，有一个简便方法，就是Symbol.iterator方法直接引用数组的 Iterator 接口。')
{
    let iterable = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };

    for (let item of iterable) {
        console.log(item);
    }

}
