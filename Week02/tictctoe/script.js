let cells = document.getElementsByClassName("cell");
for (let index = 0; index < cells.length; index++) {
   document.getElementsByClassName("cell")[index].onclick = clicked;
}
let turn = 1;
function clicked()
{
   if(turn == 1)
   {
      event.target.innerHTML = "0";
      event.target.onclick  = false;
      turn = 2;
      exit();
   }
   else
   {
      event.target.innerHTML = "x";
      event.target.onclick  = false;
      turn = 1;
      exit();
   }
}

function exit()
{
   let check = [  [["c1","c2","c3"],["c4","c5","c6"],["c7","c8","c9"]],       //rows
                  [["c1","c4","c7"],["c2","c5","c8"],["c3","c6","c9"]],       //cols
                  [["c1","c5","c9"],["c3","c5","c7"]]             ]     //dig
   for (let i = 0; i < check.length; i++)
   {
         let [end,plyer] = checkExit(check[i]);
         if(end)
         {
            let playerr = plyer == "0"? 1:2;
            document.getElementById("result").innerHTML = "Player "+ playerr+ " won!"
            endgame(check[0]);
         }
   }
}

function checkExit(dir)
{
   console.log(dir)
   for (let i = 0; i < dir.length; i++) {
      let vlue = document.getElementById(dir[i][0]).innerHTML;
      let end = true;
      for (let j = 1; j < dir[0].length; j++) {
         if(vlue != document.getElementById(dir[i][j]).innerHTML)
            end = false;
      }
      if(end == true && vlue != "")
         return [true,vlue];
   }
   return [false,false];
}

function endgame(dir)
{
   for (let i = 0; i < dir.length; i++) {
      for (let j = 0; j < dir[0].length; j++) {
         document.getElementById(dir[i][j]).onclick = false;
      }
   }
}

function reset()
{
   location.reload();
}
