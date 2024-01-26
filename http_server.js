const http = require("http");

const server = http.createServer((req, res) => {
    console.log('New req rec');
    res.end('hello world!!');
}); 

server.listen(8080, () => console.log('server is listening at port 8080'));

