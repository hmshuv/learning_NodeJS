const fs = require('fs');

const data = 'hello my name is himanshu and i am great!!';
const data2 = 'this world is great!!!';

fs.writeFile('./myFolder/myFile.txt', data, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Writen to file successfully!!');
    }
})
fs.writeFileSync('./myFolder/myFile.txt', data2, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Writen to file successfully 2nd time!!!!!');
    }
})


// console.log('hello world no. 1');
// console.log('hello world no. 2');