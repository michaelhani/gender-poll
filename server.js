var express = require('express');
var app = express();
app.use(express.static(__dirname+"/client"));
require("./server/config/mongoose.js");
require('./server/config/routes.js')(app);
var port=8000;
app.listen(port, function(){
	console.log("------------------");
	console.log("-------"+port+"-------");
	console.log("------------------");
});