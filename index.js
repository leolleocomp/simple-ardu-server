const express = require('express');
const redis = require('redis');

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let client = redis.createClient();
let sockets = {};

app.use('/', express.static('www'));

http.listen(8080, () =>
	console.log("server listennig on port", 8080)
);

io.on('connection', (socket) => {
    console.log('client connected');

    sockets[socket.id] = socket;

    socket.on('join', (data) => {
        console.log(data);
    });

    socket.on('disconnect', () => {
        delete sockets[socket.id];
    });
});

client.on('message', (channel, message) => {
    console.log('sending ', message, ' => to => ', channel);

    for (let i in sockets)
        if (sockets.hasOwnProperty(i))
            sockets[i].emit(channel.split(':')[1], message);
});

client.subscribe('history:temperature');
client.subscribe('history:luminancy');
client.subscribe('history:umidity');
