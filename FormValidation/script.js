function checkRequired(inputs,errors)
{
   inputs.forEach((element,index) => {
      if(element.value.length <= 0)
         document.getElementById(errors[index]).innerHTML += "Required\n";

         });
}

function checkLenght(inputs,errors)
{
   inputs.forEach((element,index) => {
      if(element.value.length >= 31)
         document.getElementById(errors[index]).innerHTML += "Max length can not exceed 30\n";
         });
   inputs.forEach((element,index) => {
      if(element.value.length >= 31)
         document.getElementById(errors[index]).innerHTML += "Min length must be 5 characters long.\n";
         });
}

function checkPassword(password,confirmPassword)
{
   if(password != confirmPassword &&
      password.value.length>=5 && confirmPassword.value.length>=5)
   {
      document.getElementById("password_err").innerHTML+="Confirm Password must match password.";
   }
}


function checkEmail(email)
{
   const pattren = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"

   if(!pattren.test(email))
   {
      document.getElementById("email_err").innerHTML+="Invalid email address.";
   }
}


function onSubmitListner()
{
   const form = document.getElementById("form");
   const namee = document.getElementById("name");
   const email = document.getElementById("email");
   const phone = document.getElementById("phone");
   const password = document.getElementById("password");
   const confirmPassword = document.getElementById("confirmPassword");
   const input_arr = [namee,email,password,confirmPassword];
   console.log(input_arr)
   const errors = ["name_err","email_err","password_err","confirmPassword_err"];
   checkPassword(password,confirmPassword);
   checkEmail(email);
   checkRequired(input_arr,errors);
   checkLenght(input_arr,errors);

}
