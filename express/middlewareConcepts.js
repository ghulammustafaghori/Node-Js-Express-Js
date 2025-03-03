const express=require('express')
const app=express();
const reqFilter = (req,resp,next)=>{
    const salary = req.query.salary;
    if(!salary){
        resp.send("No Salary Provided")
    }
    else if(salary<50000){
        resp.send("Your Salary is below 50000")
    }
    else {
        next();
    }
}
app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('This is our Middleware Learning in Express JS')
})
app.get('/about',(req,resp)=>{
    resp.send('This is our About page')
})
app.listen(2000,()=>{
    console.log("Server is running")
})