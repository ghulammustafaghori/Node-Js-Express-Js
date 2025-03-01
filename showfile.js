const fs=require('fs');
// fs.writeFileSync("show.txt","Node JS")
const path=require('path');

const myFolder=path.join(__dirname,'myfolder');
// console.log(myFolder)
for(let i=0; i<2; i++){
    fs.writeFileSync(`${myFolder}/show${i}.txt`,"This is File No: "+i); //two methods of concatination
}

fs.readdir(myFolder,(err,items)=>{
    // console.log(items)
    items.forEach((file)=> {
        console.log(file)
    })
})