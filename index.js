const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);


// route for index.html
app.get('/', (req, res) => 
{
    res.sendFile(__dirname + '/public/index.html');
});

// socket connection
io.on('connection', (socket) => 
{
    console.log("new user connected");
    socket.on('disconnect', () => {
        console.log("a user disconnected")
    });
});

server.listen(3000, () => 
{
    console.log('listening on 3000 port');
});