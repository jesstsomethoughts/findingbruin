const splash = document.querySelector('.splash');

function startSound() {
    myMusic = new sound("orpheus.mp3");
    myMusic.play();
}

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})


