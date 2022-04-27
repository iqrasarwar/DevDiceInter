var slides = document.getElementsByClassName("img");
function move(m)
{
   var active = document.getElementsByClassName("active")[0];
   for (let i = 0; i < slides.length; i++) {
      const element = slides[i];
      if(element == active)
      {
         let x = i+m;
         if(x < 0)
            x = slides.length -1
         if( x >= slides.length)
            x = 0
         document.getElementsByClassName("img")[x].classList.add("active");
         document.getElementsByClassName("img")[i].classList.remove("active");
         break;
      }
   }
}
