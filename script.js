// работа с элементами
let name = document.getElementById('name');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repeatPassword = document.getElementById('repeat-password');
let checkbox = document.getElementById('checkbox');
let flag = document.getElementById('flag');

// для работы с popup и формой
let popupButton = document.querySelector('.popup-btn');
let popup = document.getElementById('popup');
let myForm = document.getElementById('form');

// для 6 пункта
let mainTitle = document.querySelector('.main-title');
let fullNameBlock = document.querySelector('.form-name');
let emailBlock = document.querySelector('.form-email');
let repeatPasswordBlock = document.querySelector('.form-repeat-password');
let link = document.querySelector('.link');
let btn = document.getElementById('sign-up');

name.onkeydown = (e) => {
    let number = parseInt(e.key);
    if (!isNaN(number)) {
        return false;
    }
}

username.onkeydown = (e) => {
    if (e.key === '.' || e.key === ',') {
        return false;
    }
}


checkbox.onchange = (e) => {
    checkbox.checked ? console.log('Согласен') : console.log('Не согласен');
}


// кнопка sign up
btn.onclick = function () {

    if (!name.value) {
        return alert('Заполните поле Full name');
    }

    if (!username.value) {
        return alert('Заполните поле username');
    }

    if (!email.value) {
        return alert('Заполните поле E-mail');
    }
    if (!email.checkValidity()) {
        return alert('Введите корректный email');
    }

    if (password.value.length < 8) {
        return alert('Пароль должен содержать не менее 8 символов');
    }

    if (repeatPassword.value !== password.value) {
        return alert('Пароли не совпадают');
    }

    if (!flag.checked) {
        return alert('Подтвердите согласие');
    }

    popup.style.display = 'block';
}


function switchToLogin() {
    mainTitle.innerText = 'Log in to the system';

    fullNameBlock.remove();
    emailBlock.remove();
    repeatPasswordBlock.remove();
    checkbox.remove();
    link.remove();
    checkbox.remove();


    btn.innerText = 'Sign in';

    btn.onclick = function () {
        if (!username.value) {
            return alert('Заполните поле username');
        }

        if (!password.value) {
            return alert('Введите пароль');
        }
        myForm.reset();
        alert('Добро пожаловать');
    }
}


popupButton.addEventListener('click', function () {
    popup.style.display = 'none';
    myForm.reset();
    switchToLogin();
});


link.onclick = function () {
    switchToLogin();
}

console.log('end of file');
console.log('new changes -_-');

console.log('second message');
console.log('13 point');