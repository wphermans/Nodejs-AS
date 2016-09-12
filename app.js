var express = require('express');
var path 	= require('path');
var app		= express();
var server	= require('http').Server(app);
var ws 		= require('socket.io')(server);
var port 	= 8080;

app.use(express.static(path.join(__dirname, "public")));

ws.on('connection', function(socket){
	socket.emit('connection-status',{
		status:'connected'
	});
});

server.listen(port, function(){
	process.stdout.write('listening on port ' + port);

});