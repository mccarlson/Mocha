
/// <reference path="./d.ts/node.d.ts" />

var http = require("http");
var port = process.env.port || 50000;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log(req);
    res.end("Hello, World!\n");
}).listen(port);

console.log("hi");

//console

//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;
    
//    constructor (element: HTMLElement) { 
//        this.element = element;
//        this.element.innerText += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }

//    start() {
//        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
//    }

//    stop() {
//        clearTimeout(this.timerToken);
//    }

//}

//window.onload = () => {
//    var el = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
//};