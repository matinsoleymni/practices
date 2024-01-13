const $ = document;
const video = $.querySelector("video");
video.addEventListener('play', ()=> {
    video.currentTime = localStorage.getItem("time")
});

window.onbeforeunload = ()=> {
    localStorage.setItem("time" , video.currentTime);
}

video.addEventListener('pause', ()=> {
    localStorage.setItem("time" , video.currentTime);
});