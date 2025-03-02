// Objects of http are request and response 


const express=require('express');

const app=express();

app.get('',(req,resp)=>{
    const name= req.query.name;
    if(name){
        resp.send(`Welcome ${name}`)
    }
    else{
        resp.send("Routing Parameters in Express JS")
    }
 
})
app.listen(2000,()=>{
    console.log("Server is runnging on port 2000")
})