function deleteUser()
{
   let id = document.getElementById("NameToDel").value;
   const xhttp = new XMLHttpRequest();
   xhttp.open("DELETE", `http://localhost:3000/user/${id}`, false);
   xhttp.send();
   location.reload();
}

function listUsers()
{
   let x = "";
   const xhttp = new XMLHttpRequest();
   xhttp.open("GET", `http://localhost:3000/users`, false);
   xhttp.send();
   const users = JSON.parse(xhttp.responseText);
   for(let user of users)
   {
      x+=`<div><p>${user.name} ${user.password} ${user.role}</p><br><button id="${user.name}" onclick ="return edit('${user.name}')">Edit</button></div>`
   }

   document.getElementById("listt").innerHTML += x;
}

listUsers();

function edit(name)
{
   const xhttp = new XMLHttpRequest();
   xhttp.open("GET", `http://localhost:3000/users`, false);
   xhttp.send();
   const users = JSON.parse(xhttp.responseText);
   for(let user of users)
   {
      if(user.name == name)
      {
         document.getElementById("editn").value = user.name;
         document.getElementById("editp").value = user.password;
         document.getElementById("editr").value = user.role;
      }
   }
   document.getElementById("editform").action = `http://localhost:3000/user/${name}`
}
