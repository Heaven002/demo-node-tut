//the fs module can be accessed in two diff ways
//1-  const {readFileSync} = require('fs');
//2- const fs = require('fs');

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//writing into the files
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
//To prevent it from over writing
{flag : 'a'}
)