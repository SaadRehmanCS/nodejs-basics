const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Weclome to home page');
    } else if (req.url === '/about') {
        res.end('Welcome to abut');
    } else {
        res.end(`<div><h1>Oops</h1><a href="/">Go back</a></div>`);
    }
})

server.listen(3000);
