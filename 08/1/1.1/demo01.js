{
    function log(x, y = 'world') {
        console.log(x, y);
    }

    log('hello');
    log('hello', 'china');
    log('hello', '');
}

console.log('\n');
{
    function Point(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    const p = new Point();
    console.log(p)
}

console.log('\n参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的');
{
    let x = 99;
    function foo(p = x + 1) {
        console.log(p)
    }

    foo();

    x = 100;
    foo();
}
