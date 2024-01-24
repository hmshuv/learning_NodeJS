const fs = require('fs');

fs.readdir('./myFolder', (err, files)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Directory read successfully, here is the data:');
        console.log(files);
    }
})