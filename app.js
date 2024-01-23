console.log(__dirname);

console.log(__filename);

const sayHello = require('./hello.js');

sayHello('himanshu');
sayHello('john');
sayHello('shawn');

const myFunction = require('./myModule.js');

myFunction();

const multipleModule = require('./multipleModule.js');

console.log(multipleModule.foo);
multipleModule.myFunction1();
multipleModule.myFunction2();

const fs = require('./fs_mkdir.js');