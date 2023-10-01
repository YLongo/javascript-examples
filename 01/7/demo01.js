console.log('交换变量的值');
{
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    console.log(x, y)
}

console.log('\n从函数返回多个值');
{
    console.log('  返回一个数据')
    function example() {
        return [1, 2, 3];
    }
    let [a, b, c] = example();
    console.log(a, b, c);
}
{
    console.log('  返回一个对象');
    function example() {
        return {
            foo: 1, bar: 2
        }
    }
    let {foo, bar} = example();
    console.log(foo, bar);
}

console.log('\n函数参数的定义')
{
    console.log('  参数是一组有次序的值')
    function example([x, y, z]) {
        console.log(x, y, z);
    }
    example([1, 2, 3])
}
{
    console.log('  参数是一组无次序的值')
    function example({x, y, z}) {
        console.log(x, y, z);
    }
    example({z: 3, x:1, y:2});
}

console.log('\n提取 JSON 数据')
{
    let jsonData = {
        id: 42,
        status: 'ok',
        data: [867, 5309]
    };
    let {id, status, data: number} = jsonData;
    console.log(id, status, number)
}

console.log('\n遍历 Map 结构');
{
    console.log('  获取键名和键值')
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }

    console.log('  获取键名');
    for (let [key] of map) {
        console.log('key is', key);
    }

    console.log('  获取键值');
    for (let [, value] of map) {
        console.log('value is', value);
    }

}