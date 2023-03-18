const login = document.querySelector('.login');
const loginBtn = document.querySelector('.login-btn');
const register = document.querySelector('.registration');
const registerBtn = document.querySelector('.resgister-btn');
const loginBtnSec = document.getElementById('btn-login-sec');
const closeBtn = document.querySelectorAll('.close-icon');

loginBtn.addEventListener('click', () => {
    login.classList.toggle('active');
});

loginBtnSec.addEventListener('click', () => {
    if(register.classList.contains('active')){
        register.classList.remove('active');
    };
    login.classList.toggle('active');
});

registerBtn.addEventListener('click', () => {
    toggleClass();
});

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    });
});

function toggleClass(){
    login.classList.toggle('active');
    register.classList.toggle('active');
};