//CommonJS - every file is a module(default)
//modules - encapsulated codes only (only share bare minimum)

const names = require ('./4-names.js');
const sayHi = require ('./5-utils.js')

require ('./7-grenade_flavour.js')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
