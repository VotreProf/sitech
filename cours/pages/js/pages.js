const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.querySelector('audio');
const canvasElement = document.querySelector('canvas');
const canvasCtx = canvasElement.getContext('2d');
const playPauseButton = document.querySelector('.play-pause');
const seekbar = document.querySelector('.seekbar');
const volumeBar = document.querySelector('.volume');


const pauseIcon = `<span class="material-icons">
pause
</span>`;
const playIcon = `<span class="material-icons">
play_arrow
</span>`;
const replayIcon = `<span class="material-icons">
replay
</span>`;


const WIDTH = canvasElement.clientWidth;
const HEIGHT = canvasElement.clientHeight;
seekbar.value = 0;
volumeBar.value = 100;

let audioState = {
    isReplay : false,
    isPaused : true,
};


playPauseButton.addEventListener('click', togglePlayPause);

audioElement.addEventListener('timeupdate', setProgress);
audioElement.addEventListener('ended', onEnd);
audioElement.addEventListener('canplay',setDuration);
seekbar.addEventListener('input', onSeek);
volumeBar.addEventListener('input', onVolumeSeek);

const source = audioCtx.createMediaElementSource(audioElement);
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;

source.connect(analyser);
analyser.connect(audioCtx.destination);

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function draw() {
    analyser.getByteFrequencyData(dataArray);
    canvasCtx.fillStyle = 'rgb(2, 2, 2)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    const barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2.8;
        canvasCtx.fillStyle = `rgb(50,50, 200)`;
        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }

    requestAnimationFrame(draw);
}
draw();

function togglePlayPause() {
    audioCtx.resume().then(() => {
        if(audioState.isPaused) {
            playPauseButton.innerHTML = pauseIcon;
            audioElement.play();
        } else {
            if(audioState.isReplay) { // Replay
                playPauseButton.innerHTML = pauseIcon;
                audioElement.play();
                audioState.isReplay = false;
                return;
            }
            playPauseButton.innerHTML = playIcon;
            audioElement.pause();
        }
    
        audioState.isPaused = !audioState.isPaused;
    });
}

function setProgress() {
    seekbar.value =  audioElement.currentTime;
}
function setDuration() {
    seekbar.max = audioElement.duration;
}


function onEnd() {
    playPauseButton.innerHTML = replayIcon;
    audioElement.currentTime = 0;
    seekbar.value = 0;
    audioState.isReplay = true;
}
function onSeek(evt) {
    audioElement.currentTime = evt.target.value;
}

function onVolumeSeek(evt) {
    audioElement.volume = evt.target.value / 100;
}

//suivant section
function debut(){
    document.getElementById('debut').style.display ='block';
    document.getElementById('cours').style.display ='none';
    document.getElementById('expandunup').style.display = 'none';
    document.getElementById('expandundown').style.display = 'block';
}
document.getElementById('expandundown').style.display ='none';
document.getElementById('expanddeuxdown').style.display ='none';
document.getElementById('expandtroisdown').style.display ='none';
document.getElementById('expandquatredown').style.display ='none';
function un(){
   var un= document.getElementById('un');
   var upun= document.getElementById('expandunup');
   var downdun= document.getElementById('expandundown');
   if(un.style.display = 'none'){
       un.style.display = 'block';
       upun.style.display = 'none';
       downdun.style.display = 'block';
   }
}
function upun(){
    document.getElementById('un').style.display = 'none';
    document.getElementById('expandunup').style.display = 'block';
    document.getElementById('expandundown').style.display = 'none';
}

// deuxieme partie du cours
function deux(){
    document.getElementById('deux').style.display = 'block';
    document.getElementById('expanddeuxup').style.display = 'none';
    document.getElementById('expanddeuxdown').style.display = 'block';
}
function updeux(){
    document.getElementById('deux').style.display = 'none';
    document.getElementById('expanddeuxup').style.display = 'block';
    document.getElementById('expanddeuxdown').style.display = 'none';
}




// troixieme partie du langage html
function trois(){
    document.getElementById('trois').style.display = 'block';
    document.getElementById('expandtroisup').style.display = 'none';
    document.getElementById('expandtroisdown').style.display = 'block';
}
function uptrois(){
    document.getElementById('trois').style.display = 'none';
    document.getElementById('expandtroisup').style.display = 'block';
    document.getElementById('expandtroisdown').style.display = 'none';
}


// quatrieme partie du cours html
function quatre(){
    document.getElementById('quatre').style.display = 'block';
    document.getElementById('expandquatreup').style.display = 'none';
    document.getElementById('expandquatredown').style.display = 'block';
}
function upquatre(){
    document.getElementById('quatre').style.display = 'none';
    document.getElementById('expandquatreup').style.display = 'block';
    document.getElementById('expandquatredown').style.display = 'none';
}