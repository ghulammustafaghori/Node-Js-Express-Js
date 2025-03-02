const express = require('express');
const app= express();
app.get('',(req,res)=>{
res.send(`
    <input type='text' placeholder='Your Name' />
    <a href='/contact'>GO to Contact us page</a>
    `)
})

app.get('/contact',(req,res)=>{
    res.send(`
       <h1>Hello Express JS</h1>
        <a href='/about'>GO to About us page</a>
        `)
    })

    app.get('/about',(req,res)=>{
        res.send([
            {name:"Mustafa", address:"ABC"},
            {name:"Noor", address:"DEF"},
            {name:"Safi", address:"GHI"},

        ])
        })

app.listen(2000,()=>{
    console.log("Server is running on port 2000")
})