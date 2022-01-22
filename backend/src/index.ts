import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

console.clear();

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Dog King! 🐶'
    })
});

io.on('connection', (socket) => {
    socket.on('userJoin', (userJoin) => {
        io.emit("userJoin", userJoin)
    });
});

server.listen(8080, () => {
    console.log('App running in port 8080 🐳');
})