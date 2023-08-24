const http = require('http');
const port = 8080;

http.createServer(function(req,res) {
    for (const name in req.headers) {
        console.log(`${name}: ${req.headers[name]}`);
    }

    for (const name in req.trailers) {
        console.log(`${name}: ${req.trailers[name]}`);
    }

    req.on('aborted', function() {
        console.log('Request aborted');
    });

    req.on('end', function() {
        console.log('Request ended');
    });

    req.on('close', function() {
        console.log('Request closed');
    });

    req.on('data', function(chunk) {
        console.log(`chunk: ${chunk}`);
    });


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

}).listen(port, function() {
    console.log(`Server listening on port ${port}`);
});