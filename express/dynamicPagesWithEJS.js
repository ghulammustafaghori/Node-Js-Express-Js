const express=require('express');
const app=express();

app.set('view engine','ejs');

app.get('/about/:name/:id',(req,resp)=>{
    const userInfo={
        name:req.params.name,
        id:req.params.id,
        fav:['cricket','football','tennis']
    }
    resp.render('about',{userInfo})
}) 
app.listen(2000)