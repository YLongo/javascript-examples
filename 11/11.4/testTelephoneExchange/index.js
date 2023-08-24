const http = require("http");
const server = http.createServer();

server.on("request", function (req, res) {
    const fs = require("fs");
    fs.readFile('./testTelephoneExchange.html', function (err, data) {
        if (err !== null) {
            return res.end("Error reading file");
        }
        res.end(data);
    });
});

server.listen(8080, function() {
    console.log("Server is listening on port 8080");
});
