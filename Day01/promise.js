const actionA =new Promise((resolve,reject)=>{
   resolve("a done")
   reject("a rejeced")
})
const actionB =new Promise((resolve,reject)=>{
   resolve("b done")
})
const actionC =new Promise((resolve,reject)=>{
   resolve("c done")
})
Promise.all(
   actionA,
   actionB,
   actionC
).then(
   (messages)=>{
      console.log(messages)
   }
)
Promise.race(
   actionA,
   actionB,
   actionC
).then(
   (message)=>{
      console.log(message)
   }
)
