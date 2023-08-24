
const tools = require('../11/04_nodejs/tools.js');

const eventHandlers = new Map();
eventHandlers.set('request', function(req, res) {
    switch (req.method) {
        case 'GET':
            res.end('GET request received');
            break;
        case 'POST':
            res.end('POST request received');
            break;
        case 'PUT':
            res.end('PUT request received');
            break;
        case 'DELETE':
            res.end('DELETE request received');
            break;
    }
});

tools.createWebServer(3000, eventHandlers);