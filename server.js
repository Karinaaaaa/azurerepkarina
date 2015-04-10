var express = require("express"),
	http = require("http"),
	app = express();
    server,
    port=process.env.PORT || 1337;
    
app.use(express.static(__dirname + "/client"));
server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!\n");
});

server.listen(port);

console.log("Server running on port 3000");
