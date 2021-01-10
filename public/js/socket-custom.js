var socket = io();

// on para escuchar eventos
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');

});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});