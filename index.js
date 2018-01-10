const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.write('Hello');
	res.end();
});

server.listen(3000);
