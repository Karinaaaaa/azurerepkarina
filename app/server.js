var http = require("http"),
    server;
    var port = process.env.PORT||1337;

server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!\n");
});

server.listen(1337);

console.log("Server running on port 3000");
