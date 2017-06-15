//require is apart of node that helps me import node_modules folder
//require also pulls from another javascript file with an export.



var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});


//this is nodes http (retrieve a file from a server) from Line 5
http.listen(3000, function(){
	console.log('listening of port 3000');
});
