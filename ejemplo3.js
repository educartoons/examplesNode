var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'image/jpg'});
	fs.createReadStream('assets/arequipa.jpg').pipe(res);
}).listen(3000);

console.log('Server corriendo en http://localhost:3000/');