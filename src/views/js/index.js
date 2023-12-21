const socket = io();

socket.on('welcome', (data) => {
  //console.log(data);
  text.textContent = data;
});

const emitToServer = document.querySelector('#emit-to-server');
emitToServer.addEventListener('click', () => {
  socket.emit('server', 'Hola, servidor 😀');
});

socket.on('everyone', message => {
    console.log(message);
});
/*
function checkSocketStatus() {
    if (socket.connected) {
        console.log("El socket se encuentra conectado");
    } else {
        console.log("El socket no se encuentra conectado");
    }
}

socket.on('connect', () => {
    console.log("Cliente: El socket " + socket.id + " se ha conectado");
    checkSocketStatus();
});

socket.on('connect_error', () => {
    console.log("No pude conectarme al servidor 😢");
});

socket.on('disconnect', () => {
    console.log("Cliente: El socket " + socket.id + " se ha desconectado");
    checkSocketStatus();
});

socket.io.on('reconnect_attempt', () => {
    console.log("Estoy intentando reconectar 😍");
});

socket.io.on('reconnect', () => {
    console.log("Me he reconectado 😀");
})
*/
