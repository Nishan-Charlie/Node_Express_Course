const http = require('http');   //http module for build a http server
const url = require('url');   //http module for build a http server


//Server

const server=http.createServer((req, res ) => {                //it will accept a call back function
    // console.log(req);                               //which will be executed every time new request hit
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end('Hello from the server');           //response from the server

    } else if(pathName === '/product'){
        res.end('This is product u looser');
    }
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'myOwnHeader'   : 'poda koothy'
        });
        res.end('<h1> URL pilada punda <h1>');   
    }
});

// Listening to the port
server.listen(8000, '127.0.0.1',() => {                //setting port
    console.log('Listening to request on port 8000');

});
