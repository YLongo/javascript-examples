const http = require('http')
const server = http.createServer();

server.on('request', function(req, res) {
    res.end('Hello World!');
});

server.listen(8080, function() {
    console.log('Server is listening on port 8080');
});