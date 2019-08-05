var ex=require('express')
const app5=ex();
var bodyparser=require('body-parser')
app5.listen(2222,function(req,res){
    console.log("server init")
})
app5.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/hom.html")
})
app5.post("/hom1",function(req,res){
    console.log(req.body.uname)
    res.sendFile(__dirname+"/src/views/hom1.html")
})