//using the readfile module to explain the importance of using asynchronous code for nodejs

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

//now we invoke the getText
getText('./content/second.txt')
.then((result) => console.log(result))
.catch((error) => console.log(error))

readFile('./content/first.txt', 'utf8', (err, data) => {
   if (err){
    return

   }else{
      console.log(data)
     }
})