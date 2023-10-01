function run(fn) {
    let gen = fn();

    function next(err, data) {
        let result = gen.next(data);

        console.log('result:', result);

        if (result.done) {
            return;
        }

        result.value(next);
    }

    next();
}

let fs = require('fs');
let thunkify = require('thunkify');
let readFileThunk = thunkify(fs.readFile);

function* g() {
    let f1 = yield readFileThunk('/etc/hosts');
    console.log(f1);

    let f2 = yield readFileThunk('/etc/shells');
    console.log(f2);
}

run(g);