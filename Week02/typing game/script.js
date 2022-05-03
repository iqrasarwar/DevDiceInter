const options = 'https://api.quotable.io/random'

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
   document.getElementById("text").innerHTML = text;
   document.getElementById("input").innerHTML = null;
   console.log(text)
}

getnext();

