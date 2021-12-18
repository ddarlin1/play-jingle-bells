const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
let audio = new Audio('bells.mp3');
let volume = document.getElementById("volume-control");
const bell = document.getElementById("bell");
const tree = document.getElementById("tree");

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

// New Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped.

function play() {
    audio.play();
    bell.classList.add("animate-bell");
    tree.classList.add("animate-tree");
}

function pause() {
    audio.pause();
    bell.classList.remove("animate-bell");
    tree.classList.remove("animate-tree");
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    bell.classList.remove("animate-bell");
    tree.classList.remove("animate-tree");
}

// Stretch goals:
// - Add volume controls.

volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
});

