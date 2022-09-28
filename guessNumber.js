let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

let randomNumb = Math.floor(Math.random() * 100) + 1;

button.addEventListener('click', function(){
    let b = +inputIn.value;

    if (b == randomNumb){
        alert('Вы угадали! Тайное число: ' + randomNumb);
        inputIn.value = "";
    }else if(b < 0 || b > 100){
        alert('Я же просил ввести число от 1 до 100!')
    }else if (b > randomNumb){
        alert('Меньше ' + inputIn.value + '!');
        inputIn.value = "";
    }else alert('Больше ' + inputIn.value + '!');
})


