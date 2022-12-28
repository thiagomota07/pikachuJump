const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const grass = document.querySelector('.grass');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
    
    if(pokeballPosition <= 200 && pokeballPosition > 0 && pikachuPosition < 60) {

        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        grass.style.animation= 'none';

        pikachu.src = '/images/gameover.png';
        pikachu.style.width = '150px'
        pikachu.style.marginLeft = "60px"
        pikachu.style.marginBottom = "0px"

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);