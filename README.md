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