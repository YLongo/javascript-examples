console.log('对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法')
{
    let set = new Set().add('a').add('b').add('c');
    let [x, y] = set;
    console.log(x, y);

    let [first, ...rest] = set;
    console.log(first, rest)
}

console.log('\n扩展运算符（...）也会调用默认的 Iterator 接口')
{
    let str = 'hello';
    console.log([...str])
}

console.log('\nyield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口')
{
    let generator = function* () {
        yield 1;
        yield* [2, 3, 4];
        yield 5;
    };

    let iterator = generator();
    // console.log(iterator.next());
    for (item of iterator) {
        console.log(item);
    }
}

console.log('\n字符串是一个类似数组的对象，也原生具有 Iterator 接口')
{
    let str = 'hi';
    typeof str[Symbol.iterator];

    let iterator = str[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

}

console.log('\n可以覆盖原生的Symbol.iterator方法，达到修改遍历器行为的目的')
{
    let str = new String('hi');
    console.log([...str]);

    str[Symbol.iterator] = function () {
        return {
            next: function () {
                if (this._first) {
                    this._first = false;
                    return {value: 'bye', done: false};
                } else {
                    return {done: true};
                }
            },
            _first: true
        }
    };

    console.log([...str]);
    console.log(str)
}

