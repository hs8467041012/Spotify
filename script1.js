console.log("welcome to spotify");
// initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname: "Mahiye Jinna Sohna", filepath:"1.mp3", coverpath:"project folder/1.jpg"},
    {songname: "Neele Neele Ambar par", filepath:"2.mp3", coverpath:"project folder/2.jpg"},
    {songname: "Phir Aur Kya Chahiye", filepath:"3.mp3", coverpath:"project folder/3.jpg"},
    {songname: "Ram Siya Ram", filepath:"4.mp3", coverpath:"project folder/4.jpg"},
    {songname: "Tenu Leke", filepath:"5.mp3", coverpath:"project folder/5.jpg"},
    {songname: "Tere Vaaste", filepath:"6.mp3", coverpath:"project folder/6.jpg"},
    {songname: "Tum Kya Mile", filepath:"7.mp3", coverpath:"project folder/7.jpg"},
    
   
]


songitems.forEach((element, i)=>{ 
   // element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
      element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})


//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0) {
   audioElement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
   gif.style.opacity=1;
}
else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
       mastersongname.innerText = songs[songIndex].songname;
       audioElement.currentTime = 0;
        audioElement.play();
       gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=6) {
    songIndex=0
}
else {
    songIndex +=1;
}
audioElement.src = `${songIndex+1}.mp3`;
mastersongname.innerText = songs[songIndex].songname;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0) {
        songIndex=0
    }
    else {
        songIndex -=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    })

