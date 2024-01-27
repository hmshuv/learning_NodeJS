const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const sayHello = () =>{
    console.log('Hello User!');
}
const sayHi = () => {
    console.log('Hi User!');
}
const greetNewYear = () => {
    console.log('Happy New Year User!');
}
const LikeEvent = () => {
    console.log('User has liked the post');
}
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('NewYear', greetNewYear);
myEmitter.on('LikeEvent', LikeEvent);



myEmitter.emit('userJoined');
myEmitter.emit('NewYear');
myEmitter.emit('LikeEvent');