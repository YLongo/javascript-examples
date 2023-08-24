const http = require('http')
const port = 8080;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>hello world</h2>');
        res.end('<img src="https://www.baidu.com/img/bd_logo1.png" />');
        res.end();
    } else if (req.url.indexOf('/img') === 0) {
        res.writeHead(404, { 'Content-Type': 'image/png' });
        res.end();
    } else {
        res.writeHead(404);
        res.end("404 Not Found");
    }
}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});