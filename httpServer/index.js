const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end('hello world');
    } else if (req.url == '/about') {
        res.end('about page');
    } else if (req.url == '/contact') {
        res.end('contact page')
    } else if(req.url == '/userApi') {
        fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data);
        })

    } else {
        res.writeHead(404);
        res.end('404 error page')
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listing to the port no 8000')
});
