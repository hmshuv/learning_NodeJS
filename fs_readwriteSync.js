const fs = require('fs');

const data = 'hello there this is synchronous type data interpretation';
try{
fs.writeFileSync('./myFolder/myFileSync.txt', data);
console.log('write operation is successfull');

const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
console.log('read operation is successful. Here is the data:');
console.log(fileData);
}
catch(err){
    console.log('Error Occurred!!');
    console.log(err);
}