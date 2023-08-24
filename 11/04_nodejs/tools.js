module.exports.add = function (num1, num2) {
    return num1 + num2;
};

module.exports.createWebServer = function (port, eventHandlers) {
    const http = require('http')
    const server = http.createServer()

    for(let [name, func] of eventHandlers.entries()) {
        server.on(name, func)
    }

    server.listen(port, function() {
        console.log(`Server is listening on port ${port}`);
    });

    return server;
};
