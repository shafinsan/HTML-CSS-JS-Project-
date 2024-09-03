const ul=document.querySelector('ul')
const li=document.querySelectorAll('li')
const btn=document.querySelector('.button')
btn.addEventListener('click',()=>{
    ul.classList.toggle('active')
    li.forEach(l=>{
        l.classList.toggle('active')
    })
})