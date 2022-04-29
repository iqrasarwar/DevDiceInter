let btn = document.getElementsByTagName("button")[0];
btn.onclick = next;
function next()
{
   let x = document.getElementById("todo");
   let inputvl = document.getElementsByTagName("input")[0].value;
   if(inputvl != "")
   x.innerHTML += "<div class='tsk-col'>  <p>"+inputvl+"</p>   <p>   <p class='del'> <i class='fa fa-trash' aria-hidden='true'></i></p>  <p><i class='fa fa-arrow-right' aria-hidden='true'></p>  </p>  </div>"
}
let item = document.getElementsByClassName("del");
for (let i = 0; i < item.length; i++) {
   const element = item[i];
   element.addEventListener("click", e =>
   {
      console.log(e.traget)
   })

}

