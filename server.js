var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("game"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

