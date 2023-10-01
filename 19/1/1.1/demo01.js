console.log("Generator函数")
{
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    var hw = helloWorldGenerator();
    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
}

console.log('\nyield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。')
{
    function* gen() {
        yield 123 + 456;
    }

    console.log(gen().next());
}

{
    function* f() {
        console.log('执行了')
    }

    var generator = f();
    setTimeout(function () {
        generator.next();
    }, 2000)

}