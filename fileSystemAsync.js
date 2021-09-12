//Sync

const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	// console.log(result);
	const text = result;

	readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const test = result;
		writeFile(
			'./content/result_async.txt',
			`Here is the result ${test}`,
			(werr, wResult) => {
				if (werr) {
					console.log(werr);
				}
				console.log(wResult);
			}
		);
	});
});

//if dont specify the utf8 only the buffer will return
//err represent error it not a keyword u can use any name u want
//only i can access the result only in the call back
