console.log("解构赋值允许指定默认值")

{
    let [foo = true] = [];
    console.log(foo)
}

{
    let [x, y = 'b'] = ['a'];
    console.log(x, y)
}
{
    let [x, y = 'b'] = ['a', undefined];
    console.log(x, y)
}

console.log("\nES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。")
{
    let [x = 1] = [undefined]
    console.log(x)
}
{
    let [x = 1] = [null]
    console.log(x)
}

console.log("\n如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。")
{
    function f() {
        return 'aaa';
    }
    let [x = f()] = [1];
    let [y = f()] = [];
    console.log(x, y)
}

console.log("\n默认值可以引用解构赋值的其他变量，但该变量必须已经声明。");
{
    let [x = 1, y = x] = []
    console.log(x, y)
}

{
    let [x = 1, y = x] = [1, 2]
    console.log(x, y)
}

{
    let x = 1;
    let [y = x] = [];
    console.log(y)
}

{
    let [x = y, y = 1] = [];
    console.log(x, y)
}
