const fs = require("fs");

module.exports.getRequest = function (req, res) {
    if (req.url === "/") {
        console.log("Request handler 'start' was called.", req.url);
        fs.readFile("./views/testTelephoneExchange.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            res.writeHead(200);
            res.end(data);
        });
    } else if (req.url.indexOf("/public/") === 0) {
        console.log("Request handler 'public' was called.", req.url);
        fs.readFile(`.${req.url}`, function (err, data) {
            if (err) {
                console.log(err);
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            if (req.url.indexOf(".css") > 0) {
                res.writeHead(200, { "Content-Type": "text/css" });
            } else if (req.url.indexOf(".js") > 0) {
                res.writeHead(200, {
                    "Content-Type": "application/javascript",
                });
            }

            res.end(data);
        });
    } else if (req.url === "/data") {
        console.log("Request handler 'data' was called.", req.url);
        fs.readFile("./data/user.json", "utf-8", function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end("404 Not Found");
    }
};

module.exports.postRequest = function (req, res) {
    if (req.url === "/data") {
        req.on("data", function (chunk) {
            fs.writeFile("./data/user.json", chunk.toString(), function (err) {
                if (err) {
                    res.writeHead(404);
                    return res.end("404 Not Found");
                }
            });
        });
    } else {
        res.writeHead(404);
        res.end("404 Not Found");
    }
};
