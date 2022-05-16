const options = 'https://api.quotable.io/random'
const input = document.getElementById("input");
function getText()
{
   return fetch(options)
	.then(response => response.json())
	.then(data => data.content)
	.catch(err => console.error(err));
}

async function getnext()
{
   const text = await getText();
   text.split('').forEach(word => {
      const wspn = document.createElement('span')
      wspn.innerText = word;
      document.getElementById("text").appendChild(wspn);
    });
   input.innerHTML = null;
   console.log(text)
}

getnext();

input.addEventListener("input",()=>
{
   const toBeTyped = document.querySelectorAll('span');
   let userInput = document.getElementById("input").value.split('');
   toBeTyped.forEach((chr,index) => {
      let typed  = userInput[index];
      let orig = chr.innerText;
      if(typed == null)
      {
         document.querySelectorAll('span')[index].classList.remove("match");
         document.querySelectorAll('span')[index].classList.remove("unmatch");
      }
      else if(orig == typed)
      {
         document.querySelectorAll('span')[index].classList.add("match");
         document.querySelectorAll('span')[index].classList.remove("unmatch");
      }
      else{
         document.querySelectorAll('span')[index].classList.add("unmatch");
         document.querySelectorAll('span')[index].classList.remove("match");
      }
   })
});



let totlSec = 30;
let timer = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
   if (totlSec == -1)
   {
      clearTimeout(timerId);
      console.log("time up!")
      endIt();
   }
   else
   {
      timer.innerHTML = totlSec + ' Seconds';
      totlSec--;
   }
}

function endIt()
{
   document.getElementById("invis").style.display = "block";
   input.disabled = true;
}
