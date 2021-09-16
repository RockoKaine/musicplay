const music = document.querySelector('audio');
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
nextBtn.addEventListener("click", ()=>{
    alert("next");
});