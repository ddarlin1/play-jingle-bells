const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
let audio = new Audio('bells.mp3');
let volume = document.getElementById("volume-control");

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

// Stretch goals:
// - Add volume controls.

volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
});


