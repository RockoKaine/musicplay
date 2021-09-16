const music = document.querySelector('audio');
const artist = document.getElementById('artist');
const title = document.querySelector('#title');
const image = document.querySelector('img');
const playBtn = document.getElementById('play'); 
const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next'); 

let songIndex = 0;

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


// next/prev song

function nextSong () {

    if(songIndex === songs.length - 1) {
        
        nextBtn.style.color = "red"
        songIndex = songIndex;

    } else {

        loadSong(songs[songIndex]);
        music.play();
        console.log(songIndex)
        songIndex++;
        console.log(songs.length - 1)
    }

}

// Play/Pause
playBtn.addEventListener("click", ()=>{
    if(music.currentTime === 0 || music.paused){
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
        music.play();
    } else{
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
        music.pause();
    }
    
});

// Previous/Next function
prevBtn.addEventListener("click", ()=>{
    alert("prev");
});
nextBtn.addEventListener("click", nextSong);

// Update DOM

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

loadSong(songs[0]);