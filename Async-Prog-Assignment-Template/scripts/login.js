

document.getElementById("form").addEventListener("submit", logInFn);

let registeredUsers = JSON.parse(localStorage.getItem("Users"));
  //  console.log(registeredUsers);

function logInFn(event){
    event.preventDefault();

    let form = document.getElementById("form");
    let enteredEmail = form.email.value
    let enteredPassword = form.pass.value

   // console.log(enteredEmail.length, enteredPassword)

    let decision = false;

    for(let i=0; i<registeredUsers.length; i++){
       //  console.log(registeredUsers[i].email)
        // console.log(enteredEmail)

       if(registeredUsers[i].email == enteredEmail && registeredUsers[i].pass == enteredPassword){
           // console.log("LogIn Success..!!")
         //   window.location.href = "index.html";
            decision = true;
            break;
        }
    }
    
    if(decision){
        window.location.href = "index.html"
    }
    else{
        alert("LogIn Failed..!!")
    }
    
}