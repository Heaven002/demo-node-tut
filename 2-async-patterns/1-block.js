//asynchronous patterns in node js

//so basically teaching you why you should alwasy use asynchronous when writing nodejs

const http = require ('http');

// the req is the request we sending out and the res is our response
const server = http.createServer((req, res) => {
 if(req.url === '/'){
  res.end('Home page')
 }
 if(req.url === '/about'){
  //BLOCKING CODE!!!

  //let us set up a loop
for(let i = 0; i < 50; i++){
 for(let j=0; j < 50; j++){
  console.log(`${i} ${j}`)
 }
} 

//because if the blocking code we are unable to move forwrad because the code was writing synchronous
 res.end('About page')
 } 
 // res.end(`can't find page`);
})

//we listen for the server and we add a call back that should let us know when the server is listening
server.listen(5000, () => {
 console.log('server is listening at port 5000...')
})