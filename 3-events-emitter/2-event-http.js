const http = require('http');

//const server = http.createServer((req,res) => {
 // res.end("welcome")
//})

//using event Emitter API
const server = http.createServer()
//emits request event
//suscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('welcome')
})

server.listen(5000)