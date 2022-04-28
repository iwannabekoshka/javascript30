let video = document.querySelector('#video');
let duration = video.duration;
let currentTime = video.currentTime;

const track = document.querySelector('#track');
const progressBar = document.querySelector('#progress-bar');

const btnPlay = document.querySelector('#play');

const volume = document.querySelector('#volume');

const btnForward = document.querySelector('#forward');

const playPauseVideo = (event) => {
  if (video.paused) {
    video.play();
    btnPlay.classList.add('stop');
  } else {
    video.pause();
    btnPlay.classList.remove('stop');
  }
}
const timeUpdateHandler = (event) => {
  currentTime = video.currentTime;
  const percent = currentTime/duration * 100;
  setProgressBarWidth(percent);
}
const setDuration = (event) => {
  duration = video.duration;
}
function clickOnTrackHandler(event) {
  const x = event.offsetX;
  const width = this.offsetWidth;
  const percent = x/width * 100;

  const newTime = x/width * duration;
  video.currentTime = newTime;

  setProgressBarWidth(percent);
}
function setProgressBarWidth(percent) {
  progressBar.style.width = `${percent}%`;
}

function changeVolumeHandler(event) {
  const value = this.value;
  video.volume = value/100;
}

function skipInterval(event) {
  video.currentTime += 15;
}

video.addEventListener('timeupdate', timeUpdateHandler);
video.addEventListener('canplay', setDuration);
video.addEventListener('ended', () => btnPlay.classList.remove('stop'));

btnPlay.addEventListener('click', playPauseVideo);

track.addEventListener('click', clickOnTrackHandler);

volume.addEventListener('input', changeVolumeHandler);

btnForward.addEventListener('click', skipInterval);