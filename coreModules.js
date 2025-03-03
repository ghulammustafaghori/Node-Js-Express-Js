const myFile= require('fs')
// const myFile= require('fs').writeFileSync
console.log("Node Modules") // global core modules


myFile.writeFileSync("coreModulesFile.txt","Nodejs core modules") // non-global core modules

// myFile("coreModulesFile.txt","Nodejs core modules")
