const http = require('http');
const url = require('url');

const server = http.createServer((req,res) =>{
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is Overview');
    }
    else if(pathName === '/product'){
        res.end('This Is product');
    }
    else if(pathName === '/detail'){
        res.end('This Is detail');
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page Not Found</h1>');
    }
   
});

server.listen(8000,'127.0.0.1',() =>{
    console.log('Listening to request on port 8000');
});