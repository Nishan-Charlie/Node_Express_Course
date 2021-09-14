//Using Callback normally make code so messy
//So i learn alternative method.

const { readFile, writeFile } = require('fs');
const util = require('util');
readFilePromise = util.promisify(readFile);
writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const first = await readFilePromise(
			'./content/subfolder/first.txt',
			'utf8'
		);
		const second = await readFilePromise(
			'./content/subfolder/second.txt',
			'utf8'
		);
		await writeFilePromise('./content/result_Async.txt', `${first} ${second}`);
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};
start();

// const http = require('http');
// const server = http.createServer((req, res) => {
// 	if (req.url === '/') {
// 		res.end('Wellcome toHome Page');
// 	}
// 	if (req.url === '/about') {
// 		res.end('Watch black clover, which is far more better than MHA');
// 	}
// 	if (req.url === '/mha') {
// 		//Blocked Code
// 		for (let i = 0; i < 1000; i++) {
// 			for (let j = 0; j < 1000; j++) {
// 				console.log(`${i} and ${j}`);
// 			}
// 		}
// 	}
// 	res.end('Something Went Wrong!');
// });

// server.listen(5010, () => {
// 	console.log('Server Listening to Port 5010');
// });

// const gettext = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// gettext('./content/subfolder/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));
