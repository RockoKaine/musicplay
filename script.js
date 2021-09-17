const image = document.querySelector('img');
const title = document.querySelector('#title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const playlistContainer = document.getElementById('playlist-container'); 
const songInPlaylist = document.getElementById('song-in-playlist'); 
const playBtn = document.getElementById('play'); 
const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next'); 



const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Jacinto Design'
    },
]



// Play/Pause
let isPlaying = false;

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
    
}
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
    
}

playBtn.addEventListener("click", ()=> (isPlaying ? pauseSong() : playSong()));


// Update DOM

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
  
}

let songIndex = 0;


// next/prev song

function prevSong () {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong () {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// on load select first song
loadSong(songs[songIndex]);


// update progress bar
function updateProgressBar(e) {
    if(isPlaying) {
        const {duration, currentTime} = e.srcElement;

        // update progress bar
        const progressPercent = (currentTime/duration) * 100;
        progress.style.width = `${progressPercent}%`
        // calc display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10){
            durationSeconds= `0${durationSeconds}`;
        }

        // delay switch duration to avoid NaN
        if(durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        // calc display for current time
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10){
            currentSeconds= `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;


    }
}

// set progress bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
    if(!isPlaying) {
        const progressPercent = (music.currentTime/duration) * 100;
        progress.style.width = `${progressPercent}%`
        // playSong();
    }
}

function populatePlaylist() {
    songs.forEach((song)=>{
        playlistContainer.innerHTML +=  `<div class="song-in-playlist" id="song-in-playlist">
        <span class="track" id="track">${song.displayName}: ${song.artist}</span>
        </div>`
    });
}



function playSelectedSong(e) {

    console.log(e);

    // loadSong(songs[songIndex]);
    // playSong();    

}


// Previous/Next function
songInPlaylist.addEventListener('click', playSelectedSong)
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);

populatePlaylist();