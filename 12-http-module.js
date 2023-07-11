// base modules using http

const http = require ('http');

const server = http.createServer((req, res) => {
 if (req.url === '/'){
  res.end("welcome to my home page")
 }
if (req.url === '/about'){
 res.end("lets tell you of our history")
}
//default response for unidentifiable pages
res.end(`
<h1>Opps!</h1>
<p>We could not locate the page you are looking for</p>
<a href='/'>back home</a>
`)
})

server.listen(3000);