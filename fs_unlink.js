const fs = require('fs');

fs.unlink('./myFolder/newFile.txt', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File has been removed successfully!!');
    }
})