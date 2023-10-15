const mymodule = require('./mymodule');

function callback(err, data) {
    if (err) {
        console.error(err);
        return
    }
    data.forEach(f => console.log(f));
}

const dir = process.argv[2];
const endWith = process.argv[3];

mymodule(dir, endWith, callback);