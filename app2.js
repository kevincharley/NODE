var express=require('express')
const app2=express();
app2.get("/",function(req,res)
{ res.send("welcome")});
app2.listen(8080,function(req,res){
    console.log("server initialised")
})