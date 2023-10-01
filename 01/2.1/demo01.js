console.log("解构用于对象时，变量必须与属性同名，才能取到正确的值")
{
    let {bar ,foo} = {foo: 'aaa', bar: 'bbb'};
    console.log(bar, foo)

    let {baz} = {foo: 'aaa', bar: 'bbb'};
    console.log(baz)
}

console.log("\n对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。")
{
    let {log, sin, cos} = Math;
    console.log(log(4));
}
{
    const {log} = console;
    log('hello');
}

console.log('\n如果变量名与属性名不一致')
{
    let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
    console.log(baz)

    let obj = {first: 'hello', last: 'world'};
    let {first: f, last: l} = obj;
    console.log(f, l)
}

console.log('\n其实，对象的解构赋值是下面形式的简写')
{
    let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'};
    console.log(foo, bar)
}

console.log('\n对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者')
{
    let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
    console.log(baz)
    // ReferenceError: foo is not defined
    // console.log(foo)
}

console.log('\n解构也可以用于嵌套结构的对象')
{
    let obj = {
        p: [
            'hello', {y: 'world'}
        ]
    };
    let {p: [x, {y}]} = obj;
    console.log(x, y);
}

{
    let obj = {
        p: [
            'hello',
            {
                y: 'world'
            }
        ]
    };
    let {p, p: [x, {y}]} = obj;
    console.log(p)
    console.log(x, y)
}

{
    const node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };

    let {loc, loc: {start}, loc: {start: {line}}} = node;
    console.log(line)
    console.log(loc)
    console.log(start)
}

{
    let x;
    ({x} = {x: 1})
    console.log(x)
}

