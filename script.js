function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;

}

function displayHover() {
    console.log("Hovered!");
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all images with the class 'catimage'
    const hoverCat = document.querySelectorAll('.catimage');

    // Loop through each image and add event listeners
    hoverCat.forEach(image => {
        image.addEventListener('mouseenter', () => {
            playAudio('sounds/hatcompress.mp3');
        });
    });

});


function playAudio(url, volume = 0.3, speed = 1) {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.playbackRate = speed;

    audio.play().catch(error => {
        console.error('Playback failed:', error);
    });
}

setInterval(updateDateTime, 1000);

updateDateTime();
