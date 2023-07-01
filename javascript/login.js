let ErrorMsg = document.querySelector('.error-msg');
let btn = document.querySelector('.x');
let login = document.querySelector('.Login');
let sign = document.querySelector('.Sign');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body')

btn.addEventListener("click", function () {

    ErrorMsg.classList.toggle('hide');
    ErrorMsg.classList.remove('show');
    overlay.classList.remove('active');
    body.classList.remove('active');
});



login.addEventListener("click", function () {
    ErrorMsg.classList.add('show');
    ErrorMsg.classList.remove('hide');
    overlay.classList.add('active');
    body.classList.add('active');
});
sign.addEventListener("click", function () {
    ErrorMsg.classList.add('show');
    ErrorMsg.classList.remove('hide');
    overlay.classList.add('active');
    body.classList.add('active');
});