const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to home page');
    console.log(req);
    res.end();
})

server.listen(3000);
