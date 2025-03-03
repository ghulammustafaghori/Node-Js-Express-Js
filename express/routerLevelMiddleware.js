const express=require('express')
const reqFilter=require('./middleware')
const app=express()
const route=express.Router();
route.use(reqFilter)
// app.get('/',reqFilter,(req,resp)=>{
//     resp.send("This is our Home Page")
// })
app.get('/',(req,resp)=>{
 resp.send("This is our Home Page")
})
route.get('/about',(req,resp)=>{
    resp.send("This is our About Page")
})
route.get('/contact',(req,resp)=>{
    resp.send("This is our Contact Page")
})
app.use('/',route);
app.listen(2000,()=>{
    console.log("Server is runnging at port 2000")
})