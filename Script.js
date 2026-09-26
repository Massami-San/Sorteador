const inputMin = document.querySelector('.input-min');
const inputMax = document.querySelector('.input-max');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Número sorteado: ${randomNumber}`);
    document.querySelector('.resultado').textContent = `Resultado: ${randomNumber}`;
});