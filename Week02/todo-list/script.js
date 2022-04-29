let btn = document.getElementsByTagName("button")[0];
btn.onclick = next;
function next()
{
   let x = document.getElementById("tbody");
   console.log(x)
   let inputvl = document.getElementsByTagName("input")[0].value;
   if(inputvl != "")
   x.innerHTML += "<tr><td>"+inputvl+"</td><td onclick ='deleteItem()'><i class='fa fa-times' aria-hidden='true'></i></td></tr>"
}


