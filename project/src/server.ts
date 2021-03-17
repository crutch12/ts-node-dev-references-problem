// just server to serve something, skip it

import * as http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('test');
}).listen(9615);
