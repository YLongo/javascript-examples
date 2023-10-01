console.log('yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值')
{
    function* f() {
        for (let i = 0; true; i++) {
            let reset = yield i;
            if (reset) {
                i = -1;
            }
        }
    }

    let g = f();

    console.log(g.next());
    console.log(g.next());
    console.log(g.next(true));
}

console.log('\n');
{
    function* foo(x) {
        let y = 2 * (yield (x + 1));
        let z = yield (y / 3);
        return (x + y + z);
    }

    let a = foo(5);
    console.log(a.next());
    console.log(a.next());
    console.log(a.next());

    let b = foo(5);
    console.log(b.next());
    console.log(b.next(12));
    console.log(b.next(13));
}

console.log('\n');
{
    function wrapper(generatorFunction) {
        return function (...args) {
            let generatorObject = generatorFunction(...args);
            console.log(generatorObject.next());
            return generatorObject;
        };
    }

    const wrappered = wrapper(function* () {
        console.log(`first input: ${yield}`);
        return 'DONE';
    });

    console.log(wrappered().next('hello'));
}