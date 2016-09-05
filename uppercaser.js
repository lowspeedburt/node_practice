var http = require("http");
var fs = require("fs");
var map = require("through2-map");
var port = process.argv[2];
var filePath = process.argv[3];


var server = http.createServer(function (req, res){
	if (req.method == "POST"){
		var body= "";
		req.on("data", function (data){
			body += data;
		})
	 	req.on("end", function (){
	 		return body;	
		})
		.pipe(map(function (body){
			return body.toString().toUpperCase();
		}))
		.pipe(res);
	}
});

server.listen(port);
