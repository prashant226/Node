const fs = require('fs');
// const hello = 'hello world';
// console.log(hello);

const textIn = fs.readFileSync('a.txt', 'utf-8');
console.log(textIn);
const textOut = `this is waht we know about the avacado : ${textIn}.\n Created on ${Data.now()}`;
fs.writeFileSync('a.text', textOut);
console.log('file has been written');