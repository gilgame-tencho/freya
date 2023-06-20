'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Server config. -----------
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    console.log("GET /");
    console.log(request.query);
    response.send(data);
});

app.get('/api/test', (request, response) => {
    console.log("GET /api/test");
    console.log(request.query);
    response.send(data);
});

app.post('/', (request, response) => {
    console.log("POST /");
    console.log(request.body);
    response.send(data);
});

app.post('/api/test', (request, response) => {
    console.log("POST /api/test");
    console.log(request.body);
    response.send(data);
});

server.listen(SERVER_PORT, function() {
  console.log(`Starting server on port ${SERVER_PORT}`);
});
