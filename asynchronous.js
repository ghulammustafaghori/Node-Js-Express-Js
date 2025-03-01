// let firstName="Ghulam";
// let lastName="";
// // creating promise 
// const setLastName= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         lastName="Mustafa"
//         resolve()
//     },2000)
// })
// // handle promise 
// setLastName.then(()=>{
//     console.log(firstName+" "+lastName);
// })
// console.log("hello");




// method 2 
// let firstName="Ghulam";
// let lastName="";
// // creating promise 
const setLastName= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        resolve("Mustafa")
    },2000)
})
// // handle promise 
setLastName.then((data)=>{
    lastName=data
})
// console.log("hello");



//async await
let firstName="Ghulam";
let lastName="";
const displayFullName=async()=>{
    lastName=await setLastName;
    console.log(`${firstName} ${lastName}`)
}
displayFullName();

