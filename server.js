const http = require('http');
http.createServer(function (req, res) {
    if (req.url === '/hello') {
        res.end('<h1 style="text-align: center"> Hello World </h1>');
    } else if (req.url === "/Gor") {
        res.end('<h1 style="text-align: center"> Hello Gor :) </h1>');
    } else if (req.url === "/Tigran") {
        res.end('<h1 style="text-align: center"> Hello Tigran :) </h1>');
    } else if (req.url === "/Davit") {
        res.end('<h1 style="text-align: center"> Hello Davit :) </h1>');
    }  else if (req.url === "/Vigen") {
        res.end('<h1 style="text-align: center"> Hello Vigen :) </h1>');
    }

}).listen(3001);