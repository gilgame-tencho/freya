'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const fs = require('fs');

// const server_conf = Object.assign(
//     yaml.parse(fs.readFileSync(__dirname + '/conf/server_conf.yml', 'utf-8')),
//     yaml.parse(fs.readFileSync(__dirname + '/conf/apl_conf.yml', 'utf-8')),
// );

const SERVER_NAME = 'main';
const SERVER_PORT = 3000;

// Server config. -----------
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

server.listen(SERVER_PORT, function() {
  logger.info(`Starting server on port ${SERVER_PORT}`);
});
