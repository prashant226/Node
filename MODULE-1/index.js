const fs = require('fs');
// const hello = 'hello world';
// console.log(hello);

const textIn = fs.readFileSync('a.txt');
console.log(textIn);
const textOut = `this is waht we know about the avacado : ${textIn}.\nCreated on ${Data.now()}`;
fs.writeFileSync('a.text', textOut);
console.log('file has been written');