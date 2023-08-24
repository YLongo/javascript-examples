const fs = require("fs");
const queryString = require("querystring");
const template = require("art-template");
const cookie = require("./cookie");

function readMessage() {
    try {
        const data = fs.readFileSync("./data/message.json", "utf-8");
        const message = JSON.parse(data.toString());
        return message;
    } catch (err) {
        return [];
    }
}

function writeMessage(data) {
    try {
        fs.writeFileSync("./data/message.json", data);
    } catch (err) {
        console.log(err);
        return err;
    }
}

function readUsers() {
    const users = new Map();
    try {
        const data = fs.readFileSync("./data/user.json", "utf-8");
        console.log('readUsers data: ', data);
        const userList = JSON.parse(data.toString());
        for (const item of userList) {
            users.set(item.name, item.pword);
        }
        return users;
    } catch (err) {
        return users;
    }
}

module.exports.getRequest = function(req, res) {
    console.log('getRequest req url: ', req.url);
    if (req.url === '/') {
        req.cookies = cookie.parse(req.headers.cookie);
        console.log('getRequest req cookies: ', req.cookies);
        console.log('getRequest req cookies islogin: ', req.cookies.islogin);
        console.log('getRequest req cookies islogin type: ', typeof req.cookies.islogin);
        if (req.cookies.islogin === '1') {
            fs.readFile("./template/message.art", function(err, data) {
                if (err) {
                    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                    return res.end("404 Not Found");
                }

                const message = readMessage();
                console.log('typeof getRequest message: ', typeof message);
                console.log('getRequest message: ', message);
                const strHtml = template.render(data.toString(), {
                    'data': message
                });
                res.end(strHtml);
            })
        } else {
            fs.readFile('./template/login.art', function(err, data) {
                if (err) {
                    console.log(err);
                    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                    return res.end("404 Not Found");
                }
                res.end(data.toString());
            });
        }
    } else if (req.url.indexOf("/public/") === 0) {
        fs.readFile(`.${req.url}`, function(err, data) {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                return res.end("404 Not Found");
            }
            res.writeHead(200, {"Content-Type": "text/json;charset=utf-8"});
            res.end(data);
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
        res.end("404 Not Found");
    }
}


module.exports.postRequest = function(req, res) {
    if (req.url === '/login') {
        let formData = "";
        req.on('data', function(chunk) {
            formData += chunk;
        });

        req.on('end', function() {
            const user = queryString.parse(formData.toString());
            const users = readUsers();
            console.log('postRequest users: ', users);
            console.log('postRequest user: ', user);
            if (users.get(user.name) == user.pword) {
                res.writeHead(302, {
                    'Set-Cookie': cookie.serialize({'islogin': 1}),
                    'Location': '/'
                });
                res.end();
            } else {
                res.writeHead(302, {
                   'Set-Cookie': cookie.serialize({'islogin': 0}),
                    'Location': '/'     
                });
                res.end();
            }
        });
    } else if (req.url === '/sendMessage') {
        let formData = "";
        req.on('data', function(chunk) {
            formData += chunk;
        });

        req.on('end', function() {
            const message = readMessage();
            const tmp = queryString.parse(formData.toString());
            message.push({
                'user': tmp.name,
                'message': tmp.message
            });
            const err = writeMessage(JSON.stringify(message));
            if (err) {
                res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                return res.end("404 Not Found");
            }
            res.writeHead(302, {
                'Location': '/'
            });
            res.end();
        });
    }
}
