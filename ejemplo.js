/**

	Ejemplo 1
	Creacion de un Servidor Http

**/


var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hola #CodexDevs\n');	
}).listen(3000, '127.0.0.1');

console.log('Servidor corriendo en http://127.0.0.1:3000/');