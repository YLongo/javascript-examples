const http = require("http");
const fs = require("fs");
const template = require("art-template");

class hero {
    constructor(name, age, sex, items = []) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.items = items;
    }
}

const port = 8080;
let render = null;
fs.readFile("./tpl.art", function (err, data) {
    if (err !== null) {
        res.writeHead(404);
        return res.end("404 Not Found");
    }

    render = template.compile(data.toString());
});

http.createServer(function (req, res) {
    let boy = null;
    if (req.url === "/a") {
        boy = new hero("a", 18, "男", ["a", "b", "c"]);
    } else if (req.url === "/b") {
        boy = new hero("b", 28, "女", ["d", "e", "f"]);
    } else if (req.url === "/c") {
        boy = new hero("c", 38, "男", ["g", "h", "i"]);
    } else {
        boy = new hero(null, null, null, null);
    }

    const data = {
        name: boy.name,
        age: boy.age,
        sex: boy.sex,
        items: boy.items,
    };
            
    const strHtml = render(data);

    res.end(strHtml);
}).listen(port, function () {
    console.log("server is running at port " + port);
});
