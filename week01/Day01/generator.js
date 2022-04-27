function* fun(){
   yield 1
   yield 2
   yield 3
}
const funobj = fun() //sets next
console.log(funobj.next()) // 1
console.log(funobj.next()) //2
console.log(funobj.next()) //3
console.log(funobj.next()) //undefined

function* id(){
   id =0
   while(true)
   {
      yield id
      id++
   }
}
