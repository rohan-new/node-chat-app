const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message.js');

var app = express();
var server = http.createServer(app);
const port = process.env.PORT ||3000;
const pathjoin = path.join(__dirname, '../public');
var io = socketIO(server);


app.use(express.static(pathjoin));
io.on('connection',(socket)=>{
    console.log('new user connected');

    socket.emit('newmessage',generateMessage('admin','Welcome to chat app'));

    socket.broadcast.emit('newmessage',generateMessage('admin','new user comnnected'));

   

    socket.on('createmessage',(message)=>{
        console.log('create message',message);
    //     io.emit('newmessage',{
    //         from:message.from,
    //         text:message.text,
    //         createdAt: new Date().getTime()
    // });
    //    socket.broadcast.emit('newmessage',{
    //        from:message.from,
    //        text:message.text,
    //        createdAt: new Date().getTime()
    //    });


    

});
    
    socket.on('disconnect',()=>{
        console.log('Usere disconnected from server');
    });
});



server.listen(port,()=>{
    console.log('server started');
});