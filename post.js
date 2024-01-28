const EventEmitter = require('events');
const messagingApp = new EventEmitter();

// User joins event
messagingApp.on('userJoins', (userName) => {
    console.log(`${userName} has joined the chat!`);
});

// New message event
messagingApp.on('newMessage', (message) => {
    console.log(`New message: ${message}`);
});

// Sending events
messagingApp.emit('userJoins', 'JohnDoe');
messagingApp.emit('newMessage', 'Hello everyone!');
