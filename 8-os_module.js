//The os inbuilt module tells us about the operating system
const os = require ("os");

//info of current user
const user = os.userInfo()
console.log(user)

//return the system uptime in seconds
 console.log(`The system's uptime is : ${os.uptime()}`)

 const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  }
  console.log (currentOS);