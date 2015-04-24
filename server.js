var express = require("express"),
	http = require("http"),
	app = express(),
    server,
    port=process.env.PORT || 1337;
var coolobject=new 


app.use(express.static(__dirname + "/client"));

//server = http.createServer(app);

http.createServer(app).listen(port);
//server.listen(port);

console.log("Server running on port 3000");
