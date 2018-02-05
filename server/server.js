const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
const port = process.env.PORT ||3000;
const pathjoin = path.join(__dirname, '../public');
var io = socketIO(server);


app.use(express.static(pathjoin));
io.on('connection',(socket)=>{
    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log('Usere disconnected from server');
    });
});



server.listen(port,()=>{
    console.log('server started');
});