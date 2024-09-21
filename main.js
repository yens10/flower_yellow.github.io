onload = () => {
  document.body.classList.remove("container");
};

// Selecciona el elemento de audio
const flowerMusic = document.getElementById("flowerMusic");

// Selecciona el primer elemento de la flor
const firstFlower = document.querySelector('.flower--1');

// Escucha el inicio de la animación de la primera flor
firstFlower.addEventListener('animationstart', () => {
    // Reproduce la primera música
    flowerMusic.play();
});

// Para ajustar el volumen
flowerMusic.volume = 1;  // Volumen entre 0.0 y 1.0

// Cuando la primera música termine
flowerMusic.addEventListener('ended', () => {
    // Reinicia y reproduce la primera música nuevamente
    flowerMusic.currentTime = 0;  // Reinicia el tiempo de reproducción
    flowerMusic.play();            // Vuelve a reproducir
});
