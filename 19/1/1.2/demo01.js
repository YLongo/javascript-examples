console.log('yield表达式如果用在另一个表达式之中，必须放在圆括号里面。')
{
    function* demo() {
        yield 'hello' + (yield) ;
    }

    const d = demo();
    console.log(d.next());
    console.log(d.next());
    console.log(d.next());
}

console.log('\nyield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。')
{
    function foo(x, y) {
        console.log(x, y)
    }
    function* demo() {
        let a = yield 'a';
        let b = yield 'b';
        foo(a, b);
        let input = yield;
        console.log(input)
    }

    const d = demo();
    console.log(d.next());
    console.log(d.next());
    console.log(d.next());
    console.log(d.next());
}