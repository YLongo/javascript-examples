
const http= require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('<h2>你好</h2>');
});

server.listen(8080, () => {
    console.log('服务器启动成功');
});