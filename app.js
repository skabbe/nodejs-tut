// npm - global command comes with node
// npm --version 

// local dependency - use it only in this project 
// npm i <package name>

//gloabl dependency - use it in every project 
// npm i -g <package name>


// package.json - manifest file (stores important info about project/package)
// manuel approach ( create package.json file in the root, create properties etc. )
// npm init ( step by step , press enter to skip )
// npm init -y ( everytin is yes by default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);