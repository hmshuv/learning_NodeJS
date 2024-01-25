// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Listen for the 'userJoined' event
myEmitter.on('userJoined', () => {
    console.log('Welcome, new user!');
});

// Emit the 'userJoined' event
myEmitter.emit('userJoined');
