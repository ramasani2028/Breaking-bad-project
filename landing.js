document.addEventListener("DOMContentLoaded", function () {
    let video = document.querySelector(".video");
    
    video.addEventListener("ended", function () {
        video.currentTime = 0;  
        video.play();  
    });
});
