const express = require("express");
const app = express();
const port = process.env.PORT ||3000;
app.get("/books",(req,res)=>{
   res.send([
      {
          id:1,
          namee:"book1",
          location:"loc",
          writer:"hf"
      },
       {
          id:2,
          namee:"book2",
          location:"loc2",
          writer:"hf2"
       }
    ]);
})
app.listen(port,(req,res)=>{
   console.log(port);
})
