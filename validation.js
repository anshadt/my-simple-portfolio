let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let messageInput = document.getElementById("message");

function ValidateForm(){
    let isValid = true;


//validate Name
if(nameInput.value.trim() === ""){
    document.getElementById("errorName").innerHTML="Name is required";
    isValid = false;
}else if(nameInput.value.length < 3){
    document.getElementById("errorName").innerHTML="Name should have atleast 3 characters";
    isValid = false;
}else{
    document.getElementById("errorName").innerHTML=" ";
}

//validate email

if(emailInput.value.trim() === ""){
    document.getElementById("errorEmail").innerHTML="Email is required";
    isValid = false;
}else if(!validateEmail(emailInput.value)){
    document.getElementById("errorEmail").innerHTML="Please enter valid email address";
    isValid = false;
}else{
    document.getElementById("errorEmail").innerHTML=" ";
}

//validation subject

if(subjectInput.value.trim() === ""){
    document.getElementById("errorSubject").innerHTML="Subject is required";
    isValid = false;
}else if(subjectInput.value.length<10){
    document.getElementById("errorSubject").innerHTML="Subject should have atleast 3 characters";
    isValid = false;
}else{
    document.getElementById("errorSubject").innerHTML=" ";
}

//validate message

if(messageInput.value.trim() === ""){
    document.getElementById("errorMessage").innerHTML="Message is required";
    isValid = false;
}else if(messageInput.value.length<20){
    document.getElementById("errorMessage").innerHTML="Message should have atleast 10 characters";
    isValid = false;
}else{
    document.getElementById("errorMessage").innerHTML=" ";
}
return isValid
}
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
