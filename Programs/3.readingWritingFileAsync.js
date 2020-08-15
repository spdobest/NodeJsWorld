const fs = require('fs'); 


// Non-blocking or Asynchronous code
fs.readFile('./txt/start.txt','utf-8',(err,data1) =>{
    console.log(`Data1 is ${data1}`);
    if(err) return console.log('ERROR 😡');
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) =>{
        console.log(`Data2 is ${data2}`);
        fs.readFile('./txt/append.txt','utf-8',(err,data3) =>{
            console.log(`Data3 is ${data3}`);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err =>{
                console.log('Your file hasbeen reading...🏵'); 
            } );
        } );
    } );
} );
console.log('Reading File'); 

