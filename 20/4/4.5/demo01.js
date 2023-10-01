{
    console.log('Generator 函数自动执行')
    function* gen() {
        yield 1;
        yield 2;
    }

    let g = gen();

    let res = g.next();

    while (!res.done) {
        console.log(res.value);
        res = g.next();
    }
}

{
    console.log('\n手动执行 Generator 函数')
    let fs = require('fs');
    let thunkify = require('thunkify');
    let readFileThunk = thunkify(fs.readFile);

    let gen = function* () {
        let r1 = yield readFileThunk('/etc/hosts');
        console.log(r1);
        // console.log(r1.toString());
        let r2 = yield readFileThunk('/etc/shells');
        console.log(r2);
        // console.log(r2.toString());
    };

    let g = gen();
    let r1 = g.next();
    console.log(r1);

    r1.value(function (err, data) {
        if (err) throw err;
        let r2 = g.next(data);
        console.log(r2);

        r2.value(function (err, data) {
            if (err) throw err;
            g.next(data);
        })
    });
}