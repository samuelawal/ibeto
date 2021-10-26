let i = 0;
let txt = 'The biggest global Country admired for its superior quality products and services';
let bars = document.getElementsByClassName('side-nav')

function scroll(){
if(i < txt.length){
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    
setTimeout(scroll, 100)
};
}

$(document).ready(function(){
    $('.bars').click(function(){
        $('.nav-holder').toggle();
    })
$('.side-click').click(function(){
   
    $('.side-nav').show();
    $('#side-cancel').click(function(){
        $('.side-nav').hide();
    });
})
})

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('number');
const message = document.getElementById('message');

form.addEventListener('click', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
   const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
   const phoneNumberValue = phoneNumber.value.trim()
    const messageValue = message.value

    if(usernameValue === ""){
        setErrorFor(username, 'Please fill in your Name');
    }else{
        setSuccessFor(username);
    }
    if(emailValue === ""){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Please enter a valid Email")
    }
    else{
        setSuccessFor(email);
    }
    if(phoneNumberValue === ""){
        setErrorFor(phoneNumber, "Phone-number cannot be blank");
    }else if(!isNumber(phoneNumberValue)){
        setErrorFor(phoneNumber, "Enter a valid Phone Number")
    }
    else{
        setSuccessFor(phoneNumber);
    }
    if(messageValue === ""){
        setErrorFor(message, "Messages cannot be blank");
    }else{
        setSuccessFor(message);
    }
}
function setErrorFor(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;
    formGroup.className = "form-group error";
}
function setSuccessFor(input){
    const formGroup = input.parentElement;
    formGroup.className = "form-group success"
    
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isNumber(phoneNumber){
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneNumber);
}

