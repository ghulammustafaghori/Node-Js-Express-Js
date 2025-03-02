const express= require('express');

// express js ka instance create kiya hai app k name say 
const app=express('')

app.get('',(req,resp)=>{
resp.send('Good Morning From Express JS')
})
app.get('/contact',(req,resp)=>{
    resp.send('Contact JS From Express JS')
    })

app.listen(1000);