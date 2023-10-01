console.log('如果非尾部的参数设置默认值，实际上这个参数是没法省略的。')
{
    function f(x = 1, y) {
        console.log(x, y)
    }

    f();
    f(2);
    // 报错
    // f(, 1)

    console.log('\n无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。');
    f(undefined, 1);

}

console.log('\n如果传入undefined，将触发该参数等于默认值，null则没有这个效果。');
{
    function foo(x = 5, y = 6) {
        console.log(x, y);
    }

    foo(undefined, null);
}

