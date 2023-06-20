'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const fs = require('fs');
const yaml = require('yaml');

const server_conf = Object.assign(
    yaml.parse(fs.readFileSync(__dirname + '/conf/server_conf.yml', 'utf-8')),
);

const SERVER_NAME = 'main';
const SERVER_PORT = server_conf.port;

const data = {
    msg: 'hello friya!',
    no: 1,
    index: "hogehoge",
    token: "",
    challenge: "",
    type: "",
}

// Server config. -----------
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    console.log(request.query);
    response.send(data);
});

app.get('/api/test', (request, response) => {
    console.log(request.query);
    response.send(data);
});

server.listen(SERVER_PORT, function() {
  console.log(`Starting server on port ${SERVER_PORT}`);
});
