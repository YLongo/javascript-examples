const http = require('http');
const tools = require('./modules/tools');
const port = 8080;

http.createServer(function(req, res) {
    switch(req.method) {
        case 'GET':
            tools.getRequest(req, res);
            break;
        case 'POST':
            tools.postRlsequest(req, res);
            break;
    }
}).listen(port, function() {
    console.log('Server running at http://localhost:' + port);
});