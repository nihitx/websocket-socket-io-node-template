/* Requiring express */
var express = require('express');
var app = express();
/* Requiring socket */
var socket = require('socket.io');

/* The code below calls the public directory so we can see a html page if we load
Our local host */
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

/* The server is running on localhost:3000 or 127.0.0.1:3000
, if pushed to a cloud service then process.env.PORT will take care.
 */
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

/* Setting up socket.io */
var io = socket(server);
/* Lets creat a socket connection to see if we recieve messages from
the front end */
io.on('connection',(socket)=>{
	socket.on('CanBeAnyName',(data)=>{
		var message_back = 'I must have called a thousand times';
		io.sockets.emit('CanBeAnyName',message_back);
	});
});
