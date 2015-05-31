var express = require('express');
var crypto = require('crypto');

var app = express();



app.put('/message/:id', function(req, res){
	var id = req.params.id;
	

	res.write(crypto.createHash('sha1').update(new Date().toDateString()+id).digest('hex'), 'utf8');
	res.end();
});








app.listen(process.argv[2]);
