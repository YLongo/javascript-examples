const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = (senderId, message) => {
        if (id != senderId) {
            this.clients[id].write(message);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
    const welcome = `Welcome! Guests online: ${this.listeners('broadcast').length}`;
    client.write(`${welcome}\n`);
});

channel.on('level', function(id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, `${id} has left the chatroom. \n`);
});

channel.on('shutdown', () => {
    channel.emit('broadcast', '', 'the server has shut down. \n');
    channel.removeAllListeners('broadcast');
});

const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    console.log('the new join', id);
    channel.emit('join', id, client);
    client.on('data', data => {
        data = data.toString();
        channel.emit('broadcast', id, data);
        if (data == 'shutdown\r\n') {
            channel.emit('shutdown');
        }
    });

    client.on('close', () => {
        channel.emit('level', id);
    })


});

server.listen(8888);