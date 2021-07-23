const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to my home page');
    console.log(req);
    console.log('dedde');
    res.end();
})

server.listen(3000);
