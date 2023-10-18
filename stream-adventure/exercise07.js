const split2 = require('split2')
const through2 = require('through2')

let count = 0;
process.stdin.pipe(split2())
    .pipe(through2(function (line, _, next) {

        if (count % 2 === 0) {
            console.log(line.toString().toLowerCase());
        } else {
            console.log(line.toString().toUpperCase());
        }
        count++;
        next();
    }));