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
}
