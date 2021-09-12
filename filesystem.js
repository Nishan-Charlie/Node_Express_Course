//Sync

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

// console.log(first, second);
//Overwrite
writeFileSync(
	'./content/subfolder/third.txt',
	`here is the third one : ${first}, ${second}`
);

//Append to the existing file
writeFileSync(
	'./content/subfolder/third.txt',
	`here is the third one : ${first}, ${second}`,
	{ flag: 'a' }
);
