console.log("Welcome to Spotify...");

let songIndex=0;
let masterplay = document.getElementById('masterplay');
let myprogessbar = document.getElementById('myprogessbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let audioElement = new Audio('1.mp3');
let songname = document.getElementsByClassName('songname');

let songs = [
    {songName :"Scars To Be beautiful",filePath:"spotify\1.mp3" ,coverPath:"1.png"},
    {songName :"Hareeya-Meri Pyari Bindu",filePath:"spotify\2.mp3" ,coverPath:"2.png"},
    {songName :"Hey ya!",filePath:"spotify\3.mp3" ,coverPath:"3.png"},
    {songName :"Levitating-Dua Lipa",filePath:"spotify\4.mp3" ,coverPath:"4.png"},
    {songName :"Uff Teri Ada",filePath:"spotify\5.mp3" ,coverPath:"5.png"},
    {songName :"Love Me Like You Do",filePath:"spotify\6.mp3" ,coverPath:"6.png"},
    ]

songitem.forEach((element,i )=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
console.log(element,i);
element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    
});




// audioElement.play();
masterplay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogessbar.value = progress;
})

myprogessbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogessbar.value * audioElement.duration/100;
    console.log(audioElement.duration);
    // myprogessbar.value = audioElement.duration;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('d')).forEach((element)=>
    {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('d')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})