const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
	console.log(`data recived ${name} ${id} `);
});

customEmitter.emit('response');

customEmitter.on('response', () => {
	console.log(`data other logic here `);
});
customEmitter.emit('response', 'jhon', 34);
