const reqFilter=(req,resp,next)=>{
const salary=req.query.salary;
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
module.exports=reqFilter;