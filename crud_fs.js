const fs = require('fs');
const path = require('path')

const myCRUD =path.join(__dirname,"CRUD")
const myPath= `${myCRUD}/crud.txt`
// create fileju8
fs.writeFileSync(myPath,"Create Read Update Delete");

//read file

// fs.readFile(myPath,(err,file)=>{
//     // console.log(file.toString())
// })

//read file method 2

// fs.readFile(myPath, 'utf8' ,(err,file)=>{
//     console.log(file)
// })

//update

// fs.appendFile(myPath," in Node Js",(err)=>{
//     if(!err){
//         console.log("Your File Is Updated Successfully!")
//     }
// })

// //delete
// fs.unlinkSync(myPath);

// file rename 
fs.rename(myPath,`${myCRUD}/renameCRUD .txt`,(err)=>{
    if(!err){
        console.log("Your File is Renamed Successfully")
    }
}) 

