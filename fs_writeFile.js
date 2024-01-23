const fs = require('fs');

const data = 'hello my name is himanshu and i am great!!';

fs.writeFile('./myFolder/myFile.txt', data, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Writen to file successfully!!');
    }
})

console.log('hello world no. 1');
console.log('hello world no. 2');