{
    console.log('for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。');

    function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 6;
    }

    console.log('\n一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象');
    for (let v of foo()) {
        console.log(v)
    }

    let g = foo();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
}

{
    console.log('\n利用 Generator 函数和for...of循环，实现斐波那契数列');

    function* fibonacci() {
        let [prev, curr] = [0, 1];
        for(;;) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }

    for (let n of fibonacci()) {
        if (n > 1000) {
            break;
        }
        console.log(n);
    }
}

{
    console.log('\n利用for...of循环，可以写出遍历任意对象（object）的方法');

    function* objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj);

        for (let propKey of propKeys) {
            yield [propKey, obj[propKey]];
        }
    }

    let jane = {first: 'Jane', last: 'Doe'};

    for (let [key, value] of objectEntries(jane)) {
        console.log(`${key}: ${value}`);
    }
}

{
    function* numbers() {
        yield 1;
        yield 2;
        return 3;
    }

    console.log([...numbers()]);

    console.log(Array.from(numbers()));

    let [x, y] = numbers();
    console.log(x, y);

    for (let n of numbers()) {
        console.log(n);
    }
}