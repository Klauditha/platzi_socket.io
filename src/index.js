const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  //Emisión básica
  socket.emit(
    'welcome',
    (data) => console.log(data),
    'Ahora estas conectado 😊'
  );

  socket.on('server', (data) => {
    console.log(data);
  });

  //emision a todos
  io.emit('everyone', socket.id + ' se ha conectado');
  /*
  console.log("Clientes conectados: " + io.engine.clientsCount);
  console.log("ID del socket conectado: " + socket.id);
  socket.on('disconnect', () => {
    console.log("El socket " + socket.id + " se ha desconectado");
  });

  socket.conn.once("upgrade", () => {
    console.log("Hemos pasado de HTTP Long-Polling a", socket.conn.transport.name);
  });*/
});

httpServer.listen(3000);
