//we are learning how to use the utils module for readfile and writefile.
//utils module (utils.promisify - returns a promise)

const {readFile, writeFile} = require ("fs");
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt','utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    console.log(`this is ${first} and ${second}`);
    await writeFilePromise('./content/result-grenade.txt',`THIS IS AWESOME: ${first} ${second}`)
    console.log(first)
  }
  catch (error){
    console.log(error);
  }
}

start();