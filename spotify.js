console.log('hllo spotify')

let songIndex = 0;
let audioElement = new Audio('sultan.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songitem'));
let myProgressBarSongName=document.getElementById('myProgressBarSongName');
let songs = [
    { songName: "unstopable", filePath: "unstopable.mp3", coverImage: "cover/coverimg.jpg" },
    { songName: "sultan-kgf", filePath: "Sultan.mp3", coverImage: "cover/kgf.jpeg" },
    { songName: "sultan", filePath: "kgf.mp3", coverImage: "cover/sultan.jpg" },
    { songName: "bandeya re bandeya", filePath: "song/bandeya.mp3", coverImage: "cover/bandeya.jpeg" },
    { songName: "Har Har Shambhu", filePath: "song/shambu.mp3", coverImage: "cover/shambhu.jpeg" },
    { songName: "kesariya", filePath: "song/kesariya.mp3", coverImage: "cover/kesariya.jpeg" },
    { songName: "Lagdi lahore di", filePath: "song/lagdi.mp3", coverImage: "cover/lagdi.jpeg" },
    { songName: "Lagdi lahore di", filePath: "song/lagdi.mp3", coverImage: "cover/lagdi.jpeg" }
]
songItems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverImage; /////////
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    // element.getElementsByTagName('timespamp')[0].innerText=songs[i].songName; ///d//////
    // element.getElementsByTagName('img')[0].src=songs[i].coverImage; /////////
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        songIndex=parseInt(e.target.id);
        makeAllPlay();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        // console.log(`songs[${index}].filePath`)
        audioElement.src=songs[songIndex].filePath;
        myProgressBarSongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
                audioElement.play();
    //     if(masterPlay.classList.contains('fa-circle-play')){
    //         masterPlay.classList.remove('fa-circle-play')
    //     masterPlay.classList.add('fa-circle-pause')
    //     gif.style.opacity = 1;
    // }else{
    //         audioElement.paused();
    //         masterPlay.classList.remove('fa-circle-pause')
    //     masterPlay.classList.add('fa-circle-play')
    //     gif.style.opacity = 0;

    //     }
        audioElement.currentTime =0;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        myProgressBarSongName.innerText=songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('Time update')
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

document.querySelector('.previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=songs[songIndex].filePath;
    myProgressBarSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})
document.querySelector('.forward').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=songs[songIndex].filePath; ///////////////////
    myProgressBarSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

// document.getElementsByClassName('timespamp').innerText=audioElement.duration;