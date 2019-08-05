var express=require('express')
const app2=express();
app2.get("/",function(req,res)
{ res.send("welcome")});
app2.listen(8080,function(req,res){
    console.log("server initialised")
})
app2.get("/books",function(req,res){
    res.send("books here..")
})
app2.get("/author",function(req,res){
    res.send("trevor nova.")
})
app2.get("/book1",function(req,res){
    res.send("born a crime")
})