"use strict";
(function() {
	var socket = io('localhost:8080');

	socket.on('connection-status', function(event){
		document.body.appendChild(document.createTextNode(event.status));
	});

})();