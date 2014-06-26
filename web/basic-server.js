// Imported library modules
var http = require("http");

// Link our own modules
var handler = require("./request-handler");

// Start the server
var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
