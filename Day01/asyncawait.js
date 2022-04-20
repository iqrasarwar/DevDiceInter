async function dowork()
{
   try{
      const response = await makerequest("google")
   }
   catch{

   }
}


//PURE functions

// likw math function
// same output for same Input
// no side KeyframeEffectnever chnage input
//math.rand no longer pure
const arr = [1,2,3]
function addToArr(a,element)
{
   return [...a,element]
}
