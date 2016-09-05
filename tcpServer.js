var strftime = require('strftime')
var net = require("net");
var listener = process.argv[2];
var server = net.createServer(function (socket){
	var data = strftime('%F %H:%M%n')
	socket.end(data);

})
server.listen(listener);




    //console.log(strftime('%F %H:%M %n'));
    //console.log(strftime('%F %H:%M %n'));
