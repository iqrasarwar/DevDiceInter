
//aname is not accessible outside these ()
(
   function iife(){
      var aname = '';
      console.log("iffe")
   }
)();
(
   function iife(aname){
      namee = aname;
      console.log("iffe")
   }
)("iife");
