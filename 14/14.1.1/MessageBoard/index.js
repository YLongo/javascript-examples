const http = require("http");
const response = require("./modules/response");
const port = 8080;

http.createServer(function(req, res) {
    switch(req.method) {
        case "GET":
            response.getRequest(req, res);
            break;
        case "POST":
            response.postRequest(req, res);
            break;
    }
}).listen(port, function() {
    console.log(`Server is running at port ${port}`);
});