# Curso de Aplicaciones en Tiempo Real con Socket.io

Una aplicación en tiempo real es una aplicación que permite mantener a dos o más clientes conectados e informarles de cambios en las páginas sin necesidad de que estas deban recargarse.
Tanto el cliente como el servidor pueden mandar información cuando sea necesario.
En el modelo tradicional, el cliente debe iniciar una solicitud para que el servidor pueda responder.

## WebSockets

Proporciona un canal de comunicación bidireccional y full-duplex que permite tener a varios puntos finales ( también llamados sockets) conectados al mismo tiempo.
Cualquier socket puede enviar datos a los demás permitiendo una comunicación en tiempo real.
Son más eficientes cuando necesitamos tener actualizaciones continuas, pues no requieren de un Request y un Response.

## Socket.io

Es una libreria que habilita una comunucación bidireccional, de baja latencia y basada en eventos entre un cliente y un servidor.
Está construido sobre el protocolo de WebSockets, pero incluye algunas característivas extras que se pueden implementar en caso de no usar Socket.oi.
Por ejemplo:
- HTTP Long-Polling Fallback.
- Reconexión automática. 

Socket.io puede ser implementado tanto en el cliente como en servidor. La ventaja es que permite comunicar clientes web o desktop con servidores en tiempo real.
La librería oficial está rescrita en Javascript y existen implementaciones en diferentes lenguajes.

En servidores:
- Javascript
- Java
- Python

En clientes:
- Javascript
- Java
- Swift
- Dark
- Python
- .NET
- Golang
- Rust
- Kotlin

## Socket.io vs WebSockets

La ventaja de usar la librería de Socket io, en lugar de implementar tu propio WebSocket es que en la librería ya tienes resueltos la mayoría de los problemas comunes al trabajar con WebSockets.

Como se mencionó antes, socket io implementa algunas características extra, entre ellas tenemos:

HTTP Long-Polling Fallback → En el caso que la conexión no se pueda establecer por medio de WebSockets, esta se establecerá con una solicitud del tipo HTTP Long-Polling, para mantener una conexión en navegadores que aún no soportan esta tecnología.
Reconexión automática → Es común que por algunas razones la conexión entre el cliente y servidor se pierda. Es por ello, que socket io incluye un mecanismo que cada cierto tiempo revisa la conexión y trata de re-conectarla en caso de haberse perdido.
Packet buffering → Cuando la conexión de un socket se pierde, la librería almacenará cualquier evento que llegue mientras está desconectado y lo enviará cuando el socket se vuelva a conectar.
💡 Este comportamiento suele ser útil en algunos casos, pero puede ser que si el socket estuvo desconectado por mucho tiempo, al regresar, se puede tener una sobrecarga de eventos.

Broadcasting → Desde el lado del servidor se tienen varias formas de enviar eventos a todos los clientes conectados, o incluso a un grupo reducido de estos.
Multiplexing → Permite dividir la lógica de nuestra aplicación y crear canales especiales para cierto grupos de usuarios privilegiados (por ejemplo, administradores).
En conclusión, esta librería es muy fácil de usar, ya que su funcionamiento se basa en eventos que funcionan tanto desde el cliente como del servidor.

Es importante tener en cuenta que hoy en día, el protocolo de WebSockets es soportado por más del 97% de los navegadores web de forma nativa. Lo que significa que tranquilamente podrías trabajar con WebSockets puros.

Pero eventualmente, necesitarás resolver muchos de los problemas que esta librería ya tiene resueltos y altamente probados.

💡 No es necesario reinventar la rueda, solo úsala.

## Como funciona Socket.io

Esta librería se divide en dos partes, Engine io y Socket io.

### Engine.io
Es el motor de la librería. Se encarga de establecer la conexión entre el cliente y el servidor. Maneja las formas de conectarse (Transports), el mecanismo de actualización y detección de des-conexiones.

Cuando este inicia una conexión, el servidor manda cierta información (handshake) que será útil para algunos mecanismos de Engine io.

Transports → Socket io conoce a sus mecanismos de conexión mediante Transports y actualmente tiene 2 formas de conectarse, HTTP Long-Polling y WebSockets.

Mecanismos de actualización → En resumen, es la forma que tiene Engine io de cambiar de HTTP Long-Polling a WebSockets.

Pero, ¿por qué cambiaría de HTTP Long-Polling a WebSockets? Esto se debe a que socket io primero usa HTTP Long-Polling para conectarse, incluso si WebSockets está disponible, debido a que no siempre es posible conectarse mediante estos últimos y la comunicación puede fallar porque algo lo está impidiendo (proxys, firewalls, antivirus, etc.).

💡 El recuperarse de este tipo de fallos puede llegar a tomar hasta 10 segundos antes que la aplicación empiece a funcionar, esto perjudica la experiencia de usuario.

Luego, Engine io hará ciertas validaciones para determinar si se pueden usar los WebSockets, en cuyo caso, terminará conectándose mediante estos.

Detección de des-conexiones → Se incluye un mecanismo para detectar cuando un cliente se desconecta.

El cual consiste en revisar cada cierto tiempo (pingInterval) si la conexión todavía está funcionando. Esto lo logra enviando un paquete al cliente desde el servidor, y el cliente tiene cierto tiempo (pingTimeout) para responder ese paquete.

En el caso que cliente no responda, se considera que este se ha desconectado. Pero si el cliente no recibe el paquete en cierto intervalo de tiempo (pingInterval + pingTimeout) se considera como que el servidor se ha desconectado.

Una conexión se considera cerrada cuándo:

Una solicitud HTTP falla (por ejemplo, el servidor se apaga).
Una conexión por WebSocket se cierra (por ejemplo, se cierra la ventana).
Se llama al método socket.disconnect().


### Socket.io
Es la librería en sí. Por su parte, provee funcionalidades extra sobre Engine io, por ejemplo:

- Reconexión automática
- Packet buffering
- Broadcasting
- Multiplexing
- Manejo de eventos

## Creación app

```npm init```
```npm install express socket.io```
```npm install bufferutil utf-8-validate --save-dev``` Dependencias opcionales para un mejor rendimiento
```npm install nodemon --save-dev```

## Eventos de Socket.io

### Eventos del lado del cliente para el objeto socket.io

- connect → Disparó sobre una conexión exitosa.
- connect_error → Se disparó por un error de conexión.Parámetros:
    - Object objeto de error
- connect_timeout → Se disparó en un tiempo de espera de conexión.
- reconnect → Disparó a una reconexión exitosa.Parámetros:
    - Number número de intento de reconexión
- reconnect_attempt → Disparó en un intento de re-conectar.
- reconnecting → Disparó en un intento de re-conectar. Parámetros:
    - Number número de intento de reconexión
- reconnect_error → Se disparó tras un error de intento de reconexión. Parámetros:
    - Object objeto de error
- reconnect_failed → Se disparó cuando no se pudo volver a conectar dentro reconnectionAttempts

### Eventos del lado del cliente para el objeto socket

- connect → Disparo al conectar.
- error → Se dispara a un error de conexión. Parámetros:
    - Object datos de error
- disconnect → Disparó tras una des-conexión.
- reconnect → Disparó a una reconexión exitosa.Parámetros:
    - Number número de intento de reconexión
- reconnect_attempt → Disparada a un intento de re-conectarse.
- reconnecting → Disparó en un intento de re-conectar. Parámetros:
    - Number número de intento de reconexión
- reconnect_error → Se disparó tras un error de intento de reconexión. Parámetros:
    - Object objeto de error
- reconnect_failed → Se disparó cuando no se pudo volver a conectar dentro de reconnectionAttempts
  
### Eventos del Servidor
- connection / connect → Disparó contra un relación. Parámetros:
    - Socket el socket entrante.

https://ajaxhispano.com/ask/lista-de-socketio-eventos-70239/
 

## Emisión de eventos

### Eventos del servidor

- socket.emit(/* .. */) → Emisión básica.

- socket.broadcast.emit(/* .. */) → A todos los clientes del espacio de nombres actual, exceptuando al remitente.

- socket.to('room1').emit(/* .. */) → A todos los clientes en room1, excepto al remitente.

- socket.to(['room1', 'room2']).emit(/* .. */) → A todos los clientes en room1 y/o room2, excepto al remitente.

- socket.compress(false).emit(/* .. */) → Sin compresión.

- socket.volatile.emit(/* .. */) → Un mensaje que podría eliminarse si el transporte de bajo nivel no se puede escribir.

- socket.emit("question", (answer) => {*...*}); → Con reconocimiento.

- Con timeout cuando el receptor no recibió el evento en el tiempo esperado.
  
    ```
    socket.timeout(5000).emit("my-event", (err) => {
    if (err) {
        // the other side did not acknowledge the event in the given delay
    }
    });
    ```
- io.in('room1').emit(/* .. */) → A todos los clientes en room1.

- io.to(['room1', 'room2']).except('room3').emit(/* .. */) → A todos los clientes en room1 y/o room2, excepto aquellos en room3.

- io.of('myNamespace').emit(/* .. */) → A todos los clientes en el espacio de nombres “myNamespace”.

- io.of('myNamespace').to('room1').emit(/* .. */) → A todos los clientes en room1 en el espacio de nombres “myNamespace”.

- io.to(socketId).emit(/* .. */) → A un socket en particular por su ID (mensaje privado).

- io.local.emit(/* .. */) → A todos los clientes en este nodo (cuando se tienen múltiples nodos).

- io.emit(/* .. */) → A todos los clientes conectados.

### Eventos del cliente

- socket.emit(/* .. */) → Emisión básica.
- socket.emit("question", (answer) => {*...*}); → Con reconocimiento.
- socket.compress(false).emit(/* .. */) → Sin compresión.
- socket.volatile.emit(/* .. */) → Un mensaje que podría eliminarse si el transporte de bajo nivel no se puede escribir.
- Con timeout cuando el receptor no recibió el evento en el tiempo esperado.

## On, Once y Off

On → Se usa para detectar (o escuchar) un evento varias veces.
Once → Se usa para detectar (o escuchar) un evento una sola vez. Sin importar si el evento se emite varias veces.
Off → Se usa para dejar de escuchar un evento, sin importar que este se siga emitiendo.
💡 El listener del evento no debe ser una función anónima, sino una función nombrada.
