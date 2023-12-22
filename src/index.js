const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, 'views')));

const socketsOnline = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  socketsOnline.push(socket.id);

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

  //Emisión a uno solo
  socket.on('last', (message) => {
    const lastSocket = socketsOnline[socketsOnline.length - 1];
    io.to(lastSocket).emit('salute', message);
  });

  // on , once y off
  socket.emit("on","holi");
  socket.emit("on","holi");
  socket.emit("on","holi");

  socket.emit("once","holi2");
  socket.emit("once","holi2");

  socket.emit("off","holi3");
  setTimeout(() => {
    socket.emit("off","holi3");
  }, 3000);
  /*
  
  socket.on("on", () => {
    console.log("Se emite varias veces");
  })
  */

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
