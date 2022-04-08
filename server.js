///1.    creating server

///2.   requesting server

// console.log("hello hthth");

const express=require("express");

const server=express();

const middleware1=(req,res,next)=>{
    console.log("first middleware started");
    next();
}

const middleware2=(req,res,next)=>{
    console.log("second middleware started");
    next();
}

server.use(middleware1);


server.get("/",(req,res)=>{
    res.send("<h1>hello users</h1>")
})

server.get("/user",middleware1,(req,res)=>{
    res.send({name:"vishal"})
})

server.get("/age",middleware2,(req,res)=>{
    res.send({age:22})
})

server.use(middleware2);

server.listen(4000,()=>{
console.log("successful---- port is running at 4000");
});


