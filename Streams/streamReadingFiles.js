//Streams are used in continuously streaming data like reading a big file
/*
Stream Has 4 main functions
1.readable
2.writeable
3.duplex
4.Transform
*/
//Stream also extends events so we can use the event functions in stream
//In this example im going to use file handling
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 10000; i++) {
// 	writeFileSync('./content/bigfile.txt', `Hello Im Nishankar ${i}`, {
// 		flag: 'a',
// 	});
// }

const { createReadStream } = require('fs');
const stream = createReadStream('./content/bigfile.txt', {
	hightWaterMark: 9000,
	encoding: 'utf8',
});
//Reading by chunk
stream.on('data', (result) => {
	console.log(result);
});

stream.on('error', (err) => console.log(err));
