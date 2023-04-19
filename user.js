const logregBox = document.querySelector('.logreg-box');
const logregLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

logregLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})
