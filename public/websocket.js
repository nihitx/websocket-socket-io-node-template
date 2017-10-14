//Make connection
/* windows location.href is basically your local host url
And can be used for any other cloud provider
*/
var socket = io.connect(window.location.href)

/* Now we use socket.emit to send back the value */
var message = 'Hello from the other side';
socket.emit('CanBeAnyName',{
	message : message
});

/* Now we listen back from the server - check the browers console to see
this message */
socket.on('CanBeAnyName',function(data){
	console.log(data);
});
