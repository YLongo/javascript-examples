const http = require('http');
const fs = require('fs');
const port = 8080;

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hello World</h2>');
        res.end();
    } else if (req.url.indexOf('/img/') === 0) {
        fs.readFile(`.${req.url}`, function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
}).listen(port, function() {
    console.log(`Server listening on port ${port}`);
});