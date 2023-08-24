const http = require('http');
const port = 8080;

http.createServer(function(req, res) {
    const data = {
        name: 'Node.js Package',
        description: 'Node.js package file',
        keywords: ['node', 'package']
    };

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
        return;
    }

    const name = req.url.substring(1);
    if (data[name]) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data[name]));
        return;
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        return;
    }
}).listen(port, function() {
    console.log(`Server listening on: http://localhost:${port}`);
});