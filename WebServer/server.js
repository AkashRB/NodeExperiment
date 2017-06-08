
var http = require('http');

var PRINT = require("./print");

/**
 * http.createserver creates the server and .listen()->Begin accepting connections on the specified port i,e. 7777
 */
var server = http.createServer(writefile).listen(7777);
console.log("---------Server is Running on Port 7777---------");
console.log("-------Waiting for request-------");

/**
 * @author:Akash RB
 * Date:08-June-2017 2:28 PM
 * This function hanldes the Request upon successful connection
 * @param  request 
 * @param  response 
 */
function writefile(request, response) {
    //Date objects
    var date = new Date();
    var currentHours = date.getHours() - 12;
    var minutes = date.getMinutes();
    var time = currentHours + ":" + minutes
    console.log("Hours: ", time);
    console.log("----Request Received---");
    //.writeHead sets the header part of the response object.First argument is status code i,e. 200->Ok,404->Not found etc.Second argument is Context-type
    response.writeHead(200, { "Context-Type": "text/plain" });
    //.write sets the body part of the response object
    response.write("First server program");
    PRINT.filewrite(time);
    console.log("Served the Request");
    console.log("Stopping the server");
    //signals to the server that all of the response headers and body have been sent
    response.end();
    //Stops the server from accepting new connections i,e. ends the current server session
    server.close()
}
