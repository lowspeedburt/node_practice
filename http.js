var http = require("http");
var url = process.argv[2];
var r = http.get(url,function cb(response){
	response.on("data", function (data){
		console.log(data);	
	}).setEncoding("utf8");
	response.on("error",function(error){
		console.log(error);
	});
//	response.on("end", function(){
//		console.log("No more data in response!");
//	});
//
//	r.on('error', function(error) {
//		console.log(`problem with request: ${error.message}`);
//	});
})
