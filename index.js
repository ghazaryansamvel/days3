let button = document.querySelector('.changeButton')
let text = document.querySelector('.text')

button.addEventListener('click', function () {
    text.textContent = 'I Change The Text!!!';
});