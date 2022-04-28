function newTrans()
{
   let tble = document.getElementsByTagName("table")[0];
   tble.style.border = "1px solid purple";
   let text = document.getElementById("text").value;
   let amount = document.getElementById("amount").value;
   let tbl = document.getElementsByTagName("tr");
   if(tbl.length == 0)
   {
      document.getElementsByTagName("table")[0].innerHTML += "<thead><th>Text</th><th>Amount</th></thead><tbody></tbody>";
   }
   let body = document.getElementsByTagName("tbody")[0];
   body.innerHTML += "<tr><td>"+text+"</td><td>"+amount+"</td></tr>";
   let rows = document.getElementById("tbl").rows;
   let income = 0,blnce =0, expense =0;
   for (let index = 1; index < tbl.length; index++)
   {
      let x = parseInt(rows[index].cells[1].innerHTML);
      blnce += x;
      if(x > 0)
      income+=parseInt(x);
      else
      expense+=parseInt(x);
   }
   document.getElementsByClassName("expense")[0].innerHTML = "$"+expense;
   document.getElementsByClassName("income")[0].innerHTML = "$"+income;
   document.getElementsByClassName("balance")[0].innerHTML = "$"+blnce;
   document.getElementById("text").value = "";
   document.getElementById("amount").value = "";
}
let y = document.getElementsByClassName("hist")[0];
y.onclick = fun;
function fun()
{
   if( document.getElementsByClassName("toHide")[0].style.display == "none")
   document.getElementsByClassName("toHide")[0].style.display = ""
   else
   document.getElementsByClassName("toHide")[0].style.display = "none"
}
let z = document.getElementsByClassName("trans")[0];
z.onclick = trns;
function trns()
{
   if( document.getElementsByClassName("toHide1")[0].style.display == "")
   document.getElementsByClassName("toHide1")[0].style.display = "none"
   else
   document.getElementsByClassName("toHide1")[0].style.display = ""
}
