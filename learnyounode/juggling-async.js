const bl = require('bl');
const http = require("http");

const argv = process.argv;

let count = 0;
const result = [];
for (let i = 2; i < argv.length; i++) {

    http.get(argv[i], function (res) {
        res.pipe(bl((err, buffer) => {
            if (err) {
                console.error(err);
                return;
            }
            count++;
            result.push(buffer.toString());

            if (count === 3) {
                result.forEach(s => console.log(s));
            }
        }));


    })
}