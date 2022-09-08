let songindex = 0;
let audioelement = new Audio('breathin - Ariana Grande.mp3');
let mplay = document.getElementById('play');
let mprogress = document.getElementById('progress');
let mgif = document.getElementById('gif');
let msong = document.getElementById('songbanner');
let mcov = document.getElementById('cov');
let msongitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songname: "Breathin- Ariana Grande", filepath: "breathin - Ariana Grande.mp3", covers: "breathin.jpg" },
    { songname: "Apocalypse- Cigarettes after sex", filepath: "Apocalypse.mp3", covers: "apocalypse.jpg" },
    { songname: "K.-Cigarettes after sex", filepath: "K..mp3", covers: "k.jpg" },


];
mplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        mplay.classList.remove('fa-play');
        mplay.classList.add('fa-pause');
        mgif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        mplay.classList.remove('fa-pause');
        mplay.classList.add('fa-play');
        mgif.style.opacity = 0;

    }


})
audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    prog = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    // console.log(prog);
    mprogress.value = prog;
})
mprogress.addEventListener('change', () => {
    audioelement.currentTime = (mprogress.value * audioelement.duration) / 100;

})
msongitem.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].covers;
    element.getElementsByClassName("card-title")[0].innerText = songs[i].songname;
});
const makeplay = () => {

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })

}
let queue = Array.from(document.getElementsByClassName('songitemplay'));
queue.forEach((element, j) => {
    element.addEventListener('click', (e) => {
        
        //  index=e.target.id;
        //  console.log(index);
        //  console.log(e.target);
        //  e.target.classList.remove('fa-play');
        //  e.target.classList.add('fa-pause'); or
       
       
        // audioelement.currentTime = 0;
        if (audioelement.paused || audioelement.currentTime <= 0) {
            makeplay();
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            songindex = j;
            audioelement.src = songs[songindex].filepath;
            msong.innerText = songs[songindex].songname;
            mcov.src = songs[songindex].covers;
            audioelement.play();
            
            mgif.style.opacity = 1;
            mplay.classList.remove('fa-play');
            mplay.classList.add('fa-pause');
        }
        else {
            makeplay();
           
            audioelement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            mplay.classList.remove('fa-pause');
            mplay.classList.add('fa-play');
            mgif.style.opacity = 0;

        }

    })


})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 2) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = songs[songindex].filepath;
    msong.innerText = songs[songindex].songname;
    mcov.src = songs[songindex].covers;
    //songindex=j;
    audioelement.currentTime = 0;
    audioelement.play();
    mgif.style.opacity = 1;
    mplay.classList.remove('fa-play');
    mplay.classList.add('fa-pause');


})
document.getElementById('prev').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = songs[songindex].filepath;
    msong.innerText = songs[songindex].songname;
    mcov.src = songs[songindex].covers;
    //songindex=j;
    audioelement.currentTime = 0;
    audioelement.play();
    mgif.style.opacity = 1;
    mplay.classList.remove('fa-play');
    mplay.classList.add('fa-pause');

})

