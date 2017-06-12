/**
 * @author:Akash RB
 * Time:09-June-2017 10:56 AM
 */
var http = require("http");
var fs = require("fs");

//Creating a server Listening on 7777
var server = http.createServer(onResquest).listen(7777);
console.log("-----server is listening on 7777-----");
console.log("-------Waiting for request-------");

/**
 * @author:Akash RB
 *  This function handles the wrong URL's
 * @param  response 
 */
function send404Response(request, response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error-404 " + request.url + " Page not Found");
    response.end();
    server.close();
}

/**
 * @author:Akash RB
 * Handles HTTP GET as well as URL /index
 * @param  request 
 * @param  response 
 */
function onResquest(request, response) {
    console.log("Serving the Req");

    if (request.method == 'GET' && request.url == '/index') {

        //specifies that it is sending a HTML file back

        response.writeHead(200, { "Content-Type": "text/html" });
        
        fs.createReadStream("./Web File Server/index.html").pipe(response);
    }
    else {
        send404Response(request, response);
    }
    console.log("-----Stopping the Server-----");
    server.close();
}
