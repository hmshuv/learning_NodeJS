const fs = require('fs');

fs.mkdir('./myFolder', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('folder created successfully!!')
    }
})

module.exports = fs;