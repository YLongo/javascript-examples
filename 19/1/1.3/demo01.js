{
    let myIterable = {};
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    console.log([...myIterable]);
}


{
    function* gen() {

    }

    let g = gen();

    console.log(g[Symbol.iterator]() === g);
}
