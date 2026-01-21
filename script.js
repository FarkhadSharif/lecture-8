let secretNumber = Math.floor(Math.random()*100)+1;
let tries = 0;

const input = document.getElementById('guessInput')
const button = document.getElementById('checkBtn')
const message = document.getElementById('message')
const attempts = document.getElementById('attempts')
const again = document.getElementById('again')

button.addEventListener('click', () => {
    const guess = Number(input.value);
    if(!input.value){
        message.textContent = 'Угадайте число';
        message.style.color = 'red';
        return;
    }
    tries++;
    if(guess<secretNumber){
        message.textContent = 'Загаданное число больше';
        message.style.color = 'blue';
    }
    else if(guess>secretNumber){
        message.textContent = 'Загаданное число меньше';
        message.style.color = 'cyan';
    }
    else{
        message.textContent = "Вы угадали число!!!";
        message.style.color = 'green';
        button.disabled = true;
    }
    attempts.textContent = `Было попыток: ${tries}`;
    input.value = '';
});

again.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random()*100)+1;
    button.disabled = false;
    tries = 0;
    attempts.textContent = `Было попыток: ${tries}`;
    message.textContent = 'Угадайте число';
    message.style.color = 'red';
});