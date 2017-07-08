var express = require('express');
var app = express();
var path = require('path');



app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
	console.log(req.originalUrl);
	console.log(req.path);
	res.sendFile(__dirname + '/index.html');
});

app.get('/home',function(req,res){
	console.log(req.originalUrl);
	console.log(req.path);
	res.sendFile(__dirname + '/index.html');
});


app.get('/login',function(req,res){
	console.log(req.originalUrl);
	console.log(req.path);
	res.sendFile(__dirname + '/login.html');
});


app.listen(app.get('port'),function(){
	console.log('started..');
	console.log('started on heroku....');

});

module.export =app;