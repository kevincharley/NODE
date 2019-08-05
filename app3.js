var ex=require('express')
const app3=ex();
app3.get("/",function(req,res){
    res.send("welcome to this company")
})
app3.listen(1111,function(req,res){})
app3.get("/emp",function(res,req){
 req.send("emp details")   
})
app3.get("/ab?cd",function(req,res){
    res.send("fdgidgdsisgsgdhsdfhdfhfhdfchvbffbh")
})
app3.get("/ab+cd",function(req,res){
    res.send("fdgidgdsisgsgdhsdfhdfhfhdfchvbffbh")
})
app3.get("/ef*gh",function(req,res){
    res.send("fdgidgdsisgsgdhsdfhdfhfhdfchvbffbh")
})
app3.get(/a/,function(req,res){
    res.send("fdgiopupupupuh")
})
app3.get(/.*fly$/,function(req,res){
    res.send("kevin")
})
app3.get("/books/:id",function(req,res){
    res.send("jggk"+req.params.id)
})
app3.get("/book/poems",function(req,res){
    res.send("poems")
   
})
