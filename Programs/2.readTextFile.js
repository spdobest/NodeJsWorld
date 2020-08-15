const fs = require('fs');
// read file
const textIn = fs.readFileSync('./txt/start.txt','utf-8');
console.log(textIn);
// write file
const textOut = `THis is what we know about the  sdsd${textIn}. \n created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File Written');
