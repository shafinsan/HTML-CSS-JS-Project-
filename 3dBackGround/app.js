const btn = document.querySelector('nav');
const page = document.querySelector('.page_container');
const allPage = document.querySelectorAll('.page')
let overlay = document.querySelector('.overlay');
console.log(overlay)
let index = 0
btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    page.classList.toggle('active')
})
const list = document.querySelectorAll('li')
list.forEach((li, i) => {
    li.addEventListener('click', () => {
        showPage(i)
    })
})

const showPage = (i) => {
    console.log('hi')
    if (index === i) return
    overlay.style.animation = `slider 1s linear 1`
    setTimeout(() => {
        allPage[index].classList.remove('active')
        allPage[i].classList.add('active')
        index = i;
    }, 500);
    setTimeout(() => {
        overlay.style.animation = null;
    }, 1000)
}