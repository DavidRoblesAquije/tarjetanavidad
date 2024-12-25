const card = document.getElementById('card');
const audio = new Audio('audio/tucancion.mp3');
let hasPlayed = false;

card.addEventListener('click', () => {
    card.classList.toggle('open');
    if (!hasPlayed) {
        audio.play();
        hasPlayed = true; // Asegura que la canción no se reinicie en futuros clics
    }
});

const snowContainer = document.createElement('div');
snowContainer.className = 'snowflakes';
document.body.appendChild(snowContainer);

for (let i = 0; i < 50; i++) { // Cambia 50 por el número de copos que desees
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄'; // Cambia a otro símbolo si lo prefieres
    snowflake.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria
    snowflake.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
    snowContainer.appendChild(snowflake);
}


const cardBack = document.querySelector('.card-back');
const images = [
    'images/lamejor.jpg', // Reemplaza con tus rutas
    'images/joshycoco.jpg', 
    'images/joshyenverano.jpg', 
    'images/sonrisacontagiosa.jpg', 
];

let currentIndex = 0;
let isLayer1Visible = true;

const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');

// Función para cambiar la imagen con transición suave
function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length;

    if (isLayer1Visible) {
        layer2.style.backgroundImage = `url('${images[nextIndex]}')`;
        layer2.style.opacity = 1;
        layer1.style.opacity = 0;
    } else {
        layer1.style.backgroundImage = `url('${images[nextIndex]}')`;
        layer1.style.opacity = 1;
        layer2.style.opacity = 0;
    }

    isLayer1Visible = !isLayer1Visible; // Alterna las capas
    currentIndex = nextIndex; // Avanza al siguiente índice
}

// Cambia la imagen cada 3 segundos
setInterval(changeBackground, 3000);