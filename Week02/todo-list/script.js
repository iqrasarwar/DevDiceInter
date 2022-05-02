let btn = document.getElementsByTagName("button")[0];
btn.onclick = next;
function next()
{
   let x = document.getElementById("todo");
   let inputvl = document.getElementsByTagName("input")[0].value;
   document.getElementsByTagName("input")[0].value = "";
   if(inputvl != "")
   {
      if(x.innerHTML == "To Do Tasks appears here!") x.innerHTML="";
      x.innerHTML += "<div class='tsk-col'>  <p>"+inputvl+"</p>   <p>   <p class='del'> <i class='fa fa-trash' aria-hidden='true'></i></p>  <p class='InProg'><i class='fa fa-arrow-right' aria-hidden='true'></i></p>  </p>  </div>";
   }
   let item = document.getElementsByClassName("InProg");
   let dele = document.getElementsByClassName("del");
   for (let i = 0; i < item.length; i++) {
      item[i].onclick = (e) => inprog(e,"inprogress");
   }
   for (let i = 0; i < dele.length; i++) {
      dele[i].onclick = (e) => del(e);
   }
}

function inprog(e,str)
{
   let y=e.target.parentElement.parentElement.firstElementChild.innerHTML;
   document.getElementById(str).insertAdjacentHTML("beforeend",
   "<div class='tsk-col'>  <p>"+y+"</p>   <p>   <p class='dele'> <i class='fa fa-trash' aria-hidden='true'></i></p>  <p class='comp'><i class='fa fa-arrow-right' aria-hidden='true'></i></p>  </p>  </div>");
   e.target.parentElement.parentElement.remove();
   let del1 = document.getElementsByClassName("dele");
   let comp = document.getElementsByClassName("comp");
   for (let i = 0; i < del1.length; i++) {
      del1[i].onclick = (e) => del(e);
   }
   for (let i = 0; i < comp.length; i++) {
     comp[i].onclick = (e) => inprog(e,"complete");
   }
}
function del(e)
{
   e.target.parentElement.parentElement.remove();
}
