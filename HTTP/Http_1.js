const http = require('http');
const { readFileSync } = require('fs');
const homeFile = readFileSync('./navbar-app/index.html');
const server = http.createServer((req, res) => {
	// console.log(req.url);
	if (req.url === '/') {
		// Header
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write(homeFile);
		res.end();
	} else if (req.url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.end('Wellcome to the about page');
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.end(`
        <h1>Oops!</h1>
        <p>We cant acess the page you are
        looking for</p>
        <a href ="/" >
        Back To Home </a>`);
	}
});

///Lstining to port 5000
server.listen(5005);
