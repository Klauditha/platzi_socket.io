# Curso de Aplicaciones en Tiempo Real con Socket.io

Una aplicación en tiempo real es una aplicación que permite mantener a dos o más clientes conectados e informarles de cambios en las páginas sin necesidad de que estas deban recargarse.
Tanto el cliente como el servidor pueden mandar información cuando sea necesario.
En el modelo tradicional, el cliente debe iniciar una solicitud para que el servidor pueda responder.

## WebSockets

Proporciona un canal de comunicación bidireccional y full-duplex que permite tener a varios puntos finales ( también llamados sockets) conectados al mismo tiempo.
Cualquier socket puede enviar datos a los demás permitiendo una comunicación en tiempo real.
Son más eficientes cuando necesitamos tener actualizaciones continuas, pues no requieren de un Request y un Response.
