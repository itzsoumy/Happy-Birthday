// Play the birthday song when the button is clicked
const playButton = document.getElementById('playButton');
const birthdaySong = document.getElementById('birthdaySong');

playButton.addEventListener('click', () => {
    if (birthdaySong.paused) {
        birthdaySong.play();
        playButton.textContent = 'Pause Music 🎵';
    } else {
        birthdaySong.pause();
        playButton.textContent = 'Play Music 🎵';
    }
});
// Show hidden messages when images are clicked
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('active');
    });
});
