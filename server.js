var express = require("express"),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override');

function createStaticServer(rootPath){
    var server = express();
    server.use(methodOverride());
    console.log(__dirname + "/" + rootPath);
    server.use(express.static(__dirname + "/" + rootPath));
    server.use(express.static(__dirname + "/" + 'node_modules'));
    server.use(errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
    return server;
}

var appServer = createStaticServer('app');

appServer.listen(4000, function(){
    console.log("✔ Application available at http://localhost:%d", 4000);
});
