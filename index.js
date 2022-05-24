const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const bodyparser = require("body-parser")
const cors = require('cors')
const accessTokensecrete = "dfjgrodnojl32905itngf950tiojgog"
let users = [
   {
      name : 'john',
      password:"pass1",
      role:"admin"
   },
   {
      name : 'johny',
      password:"pass2",
      role:"user"
   }
]

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.listen(3000,()=>{
   console.log("authentication")
})
app.use(cors());
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

app.post('/user', (req, res) => {
   const user = req.body;
   console.log(user);
   users.push(user);
   res.send('user added');
});

app.get('/users', (req, res) => {
   res.json(users);
});

app.delete('/user/:name', (req, res) => {
   const name = req.params.name;
   users = users.filter(i => {
      if (i.name !== name) {
          return true;
      }
      return false;
  });
  res.send('user is deleted');
});

app.post('/user/:name', (req, res) => {
   const name = req.params.name;
   const newuser = req.body;

   for (let i = 0; i < users.length; i++) {
       let user = users[i]
       if (user.name === name) {
           users[i] = newuser;
       }
   }
   res.send('user is edited');
});

//use lod sh
//mke hsh
