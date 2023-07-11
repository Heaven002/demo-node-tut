//the fs module can be accessed in two diff ways
//1-  const {readFileSync} = require('fs');
//2- const fs = require('fs');

const { log } = require('console');
const {readFile, writeFile} = require('fs');

//reading files async
//writing a file using the syntax readFile('path','utf8','callback')
readFile('./content/first.txt', 'utf-8', (err, result)=>{
if (err){
 console.log(err);
 return
}
const first = result

readFile('./content/second.txt', 'utf-8', (err, result)=>{
 if (err){
  console.log(err)
  return;
 }
 const second = result;

//writing a file you use the syntax writeFile('path for new file','our data(file content)'callback)
writeFile('./content/result-async.txt',
`Here is the result : ${first}, ${second}`, (err, result) => {
 if (err){
  console.log(err)
  return
 }
 console.log(result)
})
})
})