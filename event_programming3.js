const EventEmitter = require('events');
const myEmitter = new EventEmitter;

const greetBirthday = (name, newAge) => {
    // name = Himanshu Gupta
    // newAge = 20
    console.log(`Happy Birthday ${name}! You are now ${newAge}!!`);
}
myEmitter.on('birthdayEvent', greetBirthday);

myEmitter.emit('birthdayEvent', 'Himanshu Gupta', '20');