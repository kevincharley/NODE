var ex=require('express')
const app4=ex();
app4.listen(1111,function(req,res){})
//app4.get("/",function(req,res){
//    res.sendFile(__dirname+"/src/views/home.html")
//})
app4.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/home.html")
})
app4.get("/emp",function(req,res){
    res.sendFile(__dirname+"/src/views/emp.html")


})
app4.get("/emp/per",function(req,res){
    res.sendFile(__dirname+"/src/views/per.html")
})
app4.get("/emp/per/:id",function(req,res){
    res.send("select emm 1s"+req.params.id)
})