const EventEmitter = require('events');


const customEmitter = new EventEmitter();

customEmitter.on('response', (ds, mug) => {
    console.log(`data recieved for ${mug}`);
});

customEmitter.on('response', (blud) => {
    console.log(`some other data here for ${blud}`);
});

customEmitter.emit('response', 'dsds', 'saad');