var http = require("http");
var port = process.env.port || 50000;
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    console.log(req.path);
    res.end("Hello, World!\n");
}).listen(port);
console.log("hi");
//@ sourceMappingURL=index.js.map
