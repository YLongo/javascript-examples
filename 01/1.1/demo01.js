// 解构赋值
console.log("解构赋值")
{
    let [a, b, c] = [1, 2, 3];
    console.log(a, b, c)

    let [foo, [[bar]], baz] = [1, [[2, 3]], 3]
    console.log(foo, bar, baz)

    let [, , third] = ["foo", "bar", "baz"]
    console.log(third)

    let [x, , y] = [1, 2, 3]
    console.log(x, y)

    let [head, ...tail] = [1, 2, 3, 4]
    console.log(head, tail)
}

console.log("\n如果解构不成功，变量的值就等于undefined")
{
    let [x, y, ...z] = ['a']
    console.log(x, y, z)

    let [foo1] = [];
    console.log(foo1)
}

console.log("\n不完全解构")
{
    let [x, y] = [1, 2, 3]
    console.log(x, y)

    let [a1, [b1], d1] = [1, [2, 3], 4]
    console.log(a1, b1, d1)
}

console.log("\n如果等号的右边不是可遍历的结构，那么将会报错")
{
    // let [foo] = 1;
    // let [foo] = false;
    // let [foo] = NaN;
    // let [foo] = undefined;
    // let [foo] = null;
    // let [foo] = {};
}

console.log("\n对于 Set 结构，也可以使用数组的解构赋值")
// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
{
    let [x, y, z] = new Set(['a', 'b', 'c'])
    console.log(x)
}

console.log("\nGenerator 函数，原生具有 Iterator 接口。解构赋值会依次从这个接口获取值")
{
    function* fibx() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibx();
    console.log(sixth)
}




