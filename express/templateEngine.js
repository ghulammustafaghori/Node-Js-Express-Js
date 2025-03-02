// ejs= embedded javascript
const express=require('express');
const app=express();

app.set('view engine','ejs');
app.get('/welcome',(req,resp)=>{
    const empInfo={
        name:"Ghulam",
        id:'123'
    }
    resp.render('welcome',{empInfo})
})
app.listen(2000,()=>{
    console.log("Server is running on port no 2000")
})
