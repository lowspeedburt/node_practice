var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var endp1 = "/api/parsetime";
var endp2 = "/api/unixtime";
var url = require("url");

var server = http.createServer(function (request, response){
	var method = request.method;
	var reqUrl = request.url;
	if (method == "GET"){
		request.on("end",function (){
			var reqParse = url.parse(reqUrl, true);
			console.log(reqParse);
		})
		respons.on("data",function (data){
			
		})

		
		JSON.stringify(response.data);
	}

		response.end();
});
server.listen(port);
