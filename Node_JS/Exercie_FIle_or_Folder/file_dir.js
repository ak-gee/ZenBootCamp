const path = require("path");
const fs= require("fs");


fs.readdir('../NODE_JS',(err,files)=>{
    if (err) throw err;
    console.log(files,files.length);
    for (let t= 0;t<files.length;t++)
    {
        if ( fs.statSync(files[t]).isFile())
            console.log(files[t] +' is a file')
        else
        console.log(files[t] +' is a folder')
    }
})