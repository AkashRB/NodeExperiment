/** 
* @author:Akash RB
* Time:08-June-2017 2:54 PM
*@function:printRandom
*It logs the some strings
*/
exports.printRandom = function () {
    return console.log("Random Stuff");
}

/**
* @author:Akash RB
* @function:filewrite
*This function appends the content to the file "log.txt" 
@param:string which contains current server time  
*/
exports.filewrite = function (time) {
    console.log("About to write the file")
    //fs is the file system node core module(like header file in c++).For core module use direct name and user module->full path) 
    var fs = require("fs");
    //First argument file name,second arument content
    fs.appendFile('..//WebServer/log.txt', "Random Stuff written by server on " + time + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    console.log(fs.readFileSync("random.txt").toString());
}

