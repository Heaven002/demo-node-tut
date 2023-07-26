//events emmitter

const EventEmitter = require('events');


const customEmitter = new EventEmitter();

//the on method recieves an event
//response here is the name of the event
customEmitter.on('response', (name, id) => {
  console.log(`data recieved, username is ${name} and id:${id}`)
})
customEmitter.on('response', () => {
  console.log('data recievked')
})
customEmitter.on('response', () => {
  console.log('data rejectd')
})

//the off object emits an event
customEmitter.emit('response','john',34)