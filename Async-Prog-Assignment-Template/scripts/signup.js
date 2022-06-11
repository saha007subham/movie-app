document.getElementById("form").addEventListener("submit", signUpFn);

let arr = JSON.parse(localStorage.getItem("Users")) || [];
//console.log(arr)

function customerDetails(n,c,m,p){
    
    this.name = n
    this.contact = c
    this.email = m
    this.pass = p
}

function signUpFn(){
    event.preventDefault();

    let form = document.getElementById("form");

    let name = form.name.value;
    let contact = form.contact.value;
    let mail = form.email.value;
    let password = form.pass.value;

    let data = new customerDetails(name,contact,mail,password);
    //console.log(data)
    arr.push(data);

    localStorage.setItem("Users", JSON.stringify(arr));

    form.name.value = null;
    form.contact.value = null;
    form.email.value = null;
    form.pass.value = null;
    
    alert("SignUp Successfull...!!")
    window.location.href = "index.html";
}