let songindex=0;
let audioelement= new Audio('breathin - Ariana Grande.mp3');
let mplay = document.getElementById('play');
let mprogress=  document.getElementById('progress');
let mgif=document.getElementById('gif');
let songs=[
    {songname:"Breathin", filename:"breathin - Ariana Grande.mp3",cover:"breathin.jpg"},
    {songname:"Breathin", filename:"breathin - Ariana Grande.mp3",cover:"breathin.jpg"},
    

];
mplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        mgif.style.opacity=1;

    }
    else{
        audioelement.pause();
        mplay.classList.remove('fa-pause');
        mplay.classList.add('fa-play');
        mgif.style.opacity=0;

    }

    
})
audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    prog=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(prog);
    mprogress.value= prog;
})


