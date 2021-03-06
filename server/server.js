const path = require('path');
const publicpath  = path.join(__dirname,'../public');
const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http');
var app = express();

var server = http.createServer(app);
var io  = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection',(socket) =>{

	console.log('new user connected');

/*socket.emit('newEmail',{

	from : 'parthbshah23@yahoo.com',
	text : 'hey, what is going on',
	createdAt : '123'
});	
*/
/*socket.emit('newMessage',{

	from : 'parth',
	text : 'see you then',
	createdAt : 123
});	*/

//socket.emit from admin for every joined people text

socket.emit('newMessage',{
	from : 'admin',
	text : 'welcome to the chat app',
createdAt : new Date().getTime()
});
//socket.broadcast.emit from admin text new user joined

socket.broadcast.emit('newMessage',{
	from : 'admin',
	text : 'New user joined',
	createdAt : new Date().getTime()
});




socket.on('createMessage',(message) => {

	console.log('createMessage', message);

	io.emit('newMessage',{

	from : message.from,
	text : message.text,
	createdAt : new Date().getTime()
	});

	/*socket.broadcast('newMessage',{

	from : message.from,
	text : message.text,
	createdAt : new Date().getTime()
	});*/
});

socket.on('disconnect',() => {

 	console.log('user was disconnected');
 });

});

app.use(express.static(publicpath));
console.log(__dirname +'/../public');
console.log(publicpath);

server.listen(port,()=>{

	console.log('server is up on' +port);
});