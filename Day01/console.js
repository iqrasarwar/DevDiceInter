function fun()
{
   var a = 1
   console.log("debugging the fun")
}

function writeToConsole()
{
   console.log("exported function writing to console");
}

export default {writeToConsole,fun};
