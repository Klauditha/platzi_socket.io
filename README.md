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