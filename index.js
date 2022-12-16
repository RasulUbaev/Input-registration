var $form =document.querySelector(`#form`);
var $FName = document.querySelector(`#FName`);
var $LName = document.querySelector(`#LName`);
var $email = document.querySelector(`#email`);
var $password = document.querySelector(`#password`);
var $eye = document.querySelector (`#eye`);
var $error_FName = document.querySelector (`#error_FName`);
var $error_LName = document.querySelector (`#error_LName`);
var $error_email = document.querySelector (`#error_email`);
var $error_password = document.querySelector (`#error_password`);
var $error_svg = document.querySelector (`#error_svg`);
var $result_menu = document.getElementById(`result_menu`);
var $btn = document.querySelector(`#btn`);
var $result_fname = document.getElementById(`result_fname`);
var $result_lname = document.getElementById(`result_lname`);
var $result_email = document.getElementById(`result_email`);
var $result_password = document.getElementById(`result_password`);
var $btn__exit = document.getElementById(`btn__exit`);



$btn.addEventListener(`click`, function () {
    $result_menu.classList.toggle(`-translate-y-[600px]`);
    $result_fname.style.color= `red`;
    $result_fname.innerHTML =`User Name: ${$FName.value}`;
    $result_lname.style.color= `blue`;
    $result_lname.innerHTML =`Last Name: ${$LName.value}`;
    $result_email.style.color= `white`;
    $result_email.innerHTML =`Email: ${$email.value}`;
    $result_password.style.color= `orange`;
    $result_password.innerHTML =`Password: ${$password.value}`;
})

    

$btn__exit.addEventListener (`click`, function(){
    $result_menu.classList.toggle(`-translate-y-[600px]`);

})

$eye.onclick = function() {

    if ($password.type === `text`){
        $password.type = `password`
    }
    else {
        $password.type = `text`
    }
}



$form.addEventListener(`submit`, function (e){
    e.preventDefault()
    $FName.value= ``
    $LName.value = ``
    $email.value =``
    $password.value = ``
})



$FName.addEventListener(`input`, function(e) {
    var value =e.target.value;

    var regOnlyLetters = new RegExp(/^[A-Za-z.\u0400-\u04FF]*$/);
    var number = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regOnlyLetters.test(value)){
        $error_FName.textContent =  ``
    }


    else if (number.test(value)) {
        $error_FName.style.color = `red`
        $error_FName.textContent = `Adding digits for your username check is straightforward:`
    }

    else {
        $error_FName.style.color=`red` 
        $error_FName.textContent = `Allowed only letters`
    }
})

$LName.addEventListener(`input`, function(e) {
    var value =e.target.value;

    var regOnlyLetters = new RegExp(/^[A-Za-z.\u0400-\u04FF]*$/);
    var number = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regOnlyLetters.test(value)){
        $error_LName.textContent = ``
    }

    else if (number.test(value)) {
        $error_LName.style.color = `red`
        $error_LName.textContent = `Adding digits for your username check is straightforward:`
    }

    else {
        $error_LName.style.color=`red` 
        $error_LName.textContent = `Allowed only letters`
    }
})

$email.addEventListener(`input`, function(e) {
    var value =e.target.value;

    var regOnlyEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (regOnlyEmail.test(value)){
        $error_email.textContent = ` `
    }
    else {
        $error_email.style.color=`red` 
        $error_email.textContent = `Allowed only email`
        
    }
})


$password.addEventListener(`input`, function(e) {
    var value =e.target.value;

    var regOnlyPassword = new RegExp("(?=.*[!@#$%^&*;:№?())])");
    if (regOnlyPassword.test(value)){
        $error_password.textContent = ` `
    }
    else {
        $error_password.style.color=`red` 
        $error_password.textContent = ` Assert a string has at least one special character.`
    }   
})      