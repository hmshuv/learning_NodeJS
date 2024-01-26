const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('This is my home page :)');
    }
    else if(req.url === '/about'){
        res.end('This is about page.');
    }
    else if(req.url === '/contact'){
        res.end('This is contact page.');
    }
    else{
        res.end('404 page not found :(');
    }
    console.log('New req rec');
    
});

server.listen(8080, () => console.log('server is listening at port 8080'));

