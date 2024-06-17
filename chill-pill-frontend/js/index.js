import gifsData from "./gifsData.js";
import songData from "./songsData.js";
import crtTransitionData from "./crtTransitionData.js";

let audioElement = document.getElementById("audioElement");
let song_status = document.getElementById("song-status");
let crt_transition_effect = document.getElementById("crt-transition-effect")
let crt_lines = document.getElementById("crt-lines")
let about_button = document.getElementById("about-button")
let about_container = document.getElementById("about-container");
let play_pause_icon = document.getElementById("play-pause-icon")
let play_pause_button = document.getElementById("play-pause-button")
let forward_button = document.getElementById("forward-button")
let previous_button = document.getElementById("previous-button")

about_button.addEventListener('click', (e)=>{
    about_container.classList.toggle('show')
})

document.addEventListener('dblclick', (e)=>{
    const gif = gifsData.gifs[Math.floor(Math.random() * gifsData.gifs.length)];
    document.body.style.background = `url(${gif.url}) no-repeat center center fixed`;
    document.body.style.backgroundSize="cover"

    const song = songData.songs[Math.floor(Math.random() * songData.songs.length)];
    audioElement.src =  new URL("http://13.233.255.18:8002/" + song.url)
    audioElement.title = song.name 
    song_status.innerText= audioElement.title
    audioElement.play()
})

audioElement.addEventListener('pause', (e)=>{
    song_status.innerText="Single Tap : Play/Pause"
    play_pause_icon.src = './images/player/play.svg'
})

audioElement.addEventListener('play', (e)=>{
    song_status.innerText= audioElement.title
    play_pause_icon.src = './images/player/pause.svg'
})

audioElement.addEventListener('loadstart', (e)=>{
    let crt_transition_gif = crtTransitionData.gifs[Math.floor(Math.random() * crtTransitionData.gifs.length)];
    crt_transition_effect.style.display = "block";
    crt_transition_effect.style.background = `url(${"./images/crt_transitions/"+crt_transition_gif.url}) no-repeat center center fixed`;
    crt_transition_effect.style.backgroundSize = "cover";
})

audioElement.addEventListener('error', (e)=>{
    document.dispatchEvent(new Event("dblclick"));
})

audioElement.addEventListener('canplay', (e)=>{
    setInterval(()=>crt_transition_effect.style.display = "none", 700);
})

audioElement.addEventListener('canplaythrough', (e)=>{
    setInterval(()=>crt_transition_effect.style.display = "none", 700);
})

document.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('volume-bar')){
        if(audioElement.paused){
            audioElement.play();
        }else{
            audioElement.pause();
        }
    }
})

window.addEventListener('keydown', (e)=>{
    if(e.code=="ArrowRight" || e.code=="ArrowLeft"){
        document.dispatchEvent(new Event("dblclick"));
    }

    if(e.code=="Space"){
        if(audioElement.paused){
            audioElement.play();
        }else{
            audioElement.pause();
        }
    }

    if(e.code=="KeyL"){
        if(crt_lines.style.display == "block"){
            crt_lines.style.display = "none";
        }else{
            crt_lines.style.display = "block";
        }
    }
})

forward_button.addEventListener('click', ()=>{
    document.dispatchEvent(new Event("dblclick"));
})

previous_button.addEventListener('click', ()=>{
    document.dispatchEvent(new Event("dblclick"));
})

window.addEventListener('load', (e)=>{
    const audio_volume = audioElement.volume;
    volume_animation(audio_volume);
})

const volume_bars = document.querySelectorAll(".volume-bar")
volume_bars.forEach(volume_bar=>{
    volume_bar.addEventListener('click', (e)=>{
        const audio_volume = volume_bar.getAttribute('data-value')/10;
        audioElement.volume = audio_volume;
    })
})  

audioElement.addEventListener('volumechange', (e)=>{
    const audio_volume = audioElement.volume;
    volume_animation(audio_volume);
})

function volume_animation(audio_volume){
    for(let volume_bar of volume_bars){
        if(Number(volume_bar.getAttribute('data-value')/10)<=audio_volume){
            volume_bar.style.opacity = 1;
        }else{
            volume_bar.style.opacity = 0.4;
        }
    }
}
