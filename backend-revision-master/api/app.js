const express=require("express")

const app=express();
const posts=require("./posts")

const rateLimit=require("express-rate-limit")

const limiter=rateLimit({
   max:10,
   windowMs:1 * 60 * 1000  //for 1minute
})


app.get("/posts",limiter,(req,res)=>{
    res.send({
        status:"Success",
        posts:posts
    })
})
app.listen(5000,()=>{
    console.log("listening on port 5000")
})