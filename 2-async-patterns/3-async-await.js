//using the readfilr module to explain the importance of using asynchronous code for nodejs
//we use async and await to shorten the code

const {readFile} = require ('fs');

//using promise
const getText = (path) => {
 return new Promise((resolve, reject) => {
  readFile(path, 'utf8', (err, data) => {
if (err){
 reject(err);
}else{
 resolve(data);
}
  })
 })
}

//using async await
const start = async () => {
 try{
  const first = await getText('./content/first.txt');
  console.log(first);
 }
 catch{
  console.log(error)
 }
}

start();
// end of async await

readFile('./content/second.txt', 'utf8', (err, data) => {
   if (err){
    return

   }else{
      console.log(data)
     }
})