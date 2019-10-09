var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
	socket.broadcast.emit('hi');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
	console.log('listen on 3000 port');
})