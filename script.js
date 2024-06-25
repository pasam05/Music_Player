const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const loopBtn = document.getElementById('loopBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const songTitle = document.getElementById('songTitle');
const songImage = document.getElementById('songImage');

const songs = [
    {title: 'Fear Song -Anirudh Ravichander', src: 'Fear.mp3' ,image: 'https://i.scdn.co/image/ab67616d0000b2738591a24a47e09545b988f9b2'},
    {title: 'Jawan - Title Song', src: 'Jawan Title Track Anirudh Ravichander 320 Kbps.mp3', image: 'https://c.saavncdn.com/047/Jawan-Hindi-2023-20230921190854-500x500.jpg'},
    {title: 'Guntur Karam - Thaman', src: 'Kurchi Madathapetti.mp3' , image: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/234629/gunturkaaram-posterart.jpg'},
];

let currentSongIndex = 0;
let isPlaying = false;
let isLooping = false;
let isShuffling = false;

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    audio.src = song.src;
    songImage.src = song.image;
}

function playPauseSong() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '⏯️';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    if (isShuffling) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(currentSongIndex);
    playPauseSong();
}

function nextSong() {
    if (isShuffling) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    playPauseSong();
}

function toggleLoop() {
    isLooping = !isLooping;
    loopBtn.classList.toggle('active');
    audio.loop = isLooping;
}

function toggleShuffle() {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle('active');
}

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
loopBtn.addEventListener('click', toggleLoop);
shuffleBtn.addEventListener('click', toggleShuffle);

audio.addEventListener('ended', nextSong);

loadSong(currentSongIndex);
