const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Wellcoe to our home page');
		res.end();
	} else if (req.url === '/home') {
		res.end('Wellcome to the home page');
	}
	res.end(`
        <h1>Oops!</h1>
        <p>We cant acess the page you are
        looking for</p>
        <a href ="/" >
        Back To Home </a>`);
});

///Lstining to port 5005
server.listen(5005);
