const express=require('express');
const path=require('path');
const public=path.join(__dirname,"public");
const app= express()

app.get('/',(req,resp)=> {
    resp.sendFile(`${public}/index.html`)
})
app.get('/home',(req,resp)=> {
    resp.sendFile(`${public}/home.html`)
})
app.get('*',(req,resp)=> {
    resp.sendFile(`${public}/pagenotFound.html`)
})

app.listen(2000)