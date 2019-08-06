var ex=require('express')
const app5=ex();
app5.set("view engine","ejs");
app5.set("views","./src/views")
var bodyparser=require('body-parser')
app5.use(bodyparser.urlencoded({extended:true}));
app5.listen(2222,function(req,res){
    console.log("server init")
})
app5.get("/",function(req,res){
    res.render("books");
})
app5.post("/hom1",function(req,res){
    var p=req.body.password
  
    if( p=="password@123"){
        console.log(req.body.uname)
    res.render("hom1",{user:req.body.uname})
    }
   else{
    res.redirect("/") 
   }
})