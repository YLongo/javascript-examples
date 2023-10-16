const bl = require('bl');
const http = require("http");

const url = process.argv[2];

http.get(url, function (res) {

    res.pipe(bl(function (err, data) {
        const result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
});