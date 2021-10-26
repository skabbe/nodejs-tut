// CommonJs, everyfile is module - by default 
// module - encapsulated Code ( only share minimum )

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./alternative-flavour')
require('./7-mind-granade')


console.log(data)

sayHi(names.peter)
sayHi(names.john)
console.log(module.exports)
