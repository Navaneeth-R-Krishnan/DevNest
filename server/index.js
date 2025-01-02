import http from 'http';
import express from 'express';
import { Server as SocketServer} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketServer({
    cors:'*'
}).attach(server);

io.on('connection', (socket) => {
    console.log('Socket Connected with ID: ', socket.id);
})

server.listen(9000, () => {
    console.log('Docker Server is running on port 9000');
})

