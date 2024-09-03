const front = document.querySelector('.image_container')
const back = document.querySelector('.trailerContainer')
const play_btn = document.querySelector('.img2')
const cross = document.querySelector('.cross')
const video = document.querySelector('video')
play_btn.addEventListener('click', () => {
    front.style.zIndex = 0;
    play_btn.style.display = 'none'
    video.play();

    cross.addEventListener('click', () => {
        front.style.zIndex = 1;
        play_btn.style.display = 'block'
        video.pause()
    })

})
