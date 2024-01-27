const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    }
    else{
        res.writeHead(404, {'contect-type': 'text/html'});
        res.write('<h1> 404, Resource not found <a href = "/"> Go back to home</a></h1>');
        res.end();
    }

   
});
server.listen(6100, () => {console.log('Server listen to port 6100')});