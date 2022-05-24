const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const bodyparser = require("body-parser")
const accessTokensecrete = "dfjgrodnojl32905itngf950tiojgog"
const users = [
   {
      name : 'john',
      password:"pass1",
      role:"admin"
   },
   {
      name : 'john',
      password:"pass1",
      role:"admin"
   }
]

app.use(bodyparser.json());
app.listen(3000,()=>{
   console.log("authentication")
})

app.post("/login",(req,res) =>
{
   const {name,password} = req.body;
   const user = users.find(u=>{
      return u.name === name && u.password === password
   });
   if(user)
   {
      const accessToken = jwt.sign({
         name : name,
         password : password
      }, accessTokensecrete)
      res.json({
         accessToken
      })
   }
   else{
      res.send("username password incorrect");
   }
});
