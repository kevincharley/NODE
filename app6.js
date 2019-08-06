var ex=require('express')
const app6=ex();
var bookw=[{name:"book1",author:"aut1213",price:"233"},{name:"book2",author:"aut12132",price:"2332"},{name:"book3",author:"aut1213",price:"233"}]
app6.set("view engine","ejs");
app6.set("views","./src/views")
var bodyparser=require('body-parser')
app6.use(bodyparser.urlencoded({extended:true}));
app6.listen(2222,function(req,res){
    console.log("server init")
})
app6.get("/",function(req,res){
    res.render("books");
})
app6.get("/booklist",function(req,res){
   res.render("booklist",{bl:bookw})
  
})