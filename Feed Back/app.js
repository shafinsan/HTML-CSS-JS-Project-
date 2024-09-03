const feeling = document.querySelectorAll('.feeling')
const  feedbackContainer=document.querySelector('.feed_container')
const allP = document.querySelectorAll('p')
const btn = document.querySelector('button')
let store = {
    type: "",
    current_emoji: ""
}
feeling.forEach(f => {
    f.addEventListener('click', (e) => {
        const emoji = e.target.closest('p')
        store.current_emoji = emoji.textContent;
        removeAllActive()
        emoji.classList.add('active')
        const value = document.querySelector('p.active').parentElement.querySelector('span').textContent
        store.type = value
    })
})

const removeAllActive = () => {
    allP.forEach(p => {
        p.classList.remove('active');
    })
}

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    feedbackContainer.innerHTML = `
    <div class="after_submit">
    <p>Thank You</p>
    <p>${store.current_emoji}</p>
    <p>Your Feed back is : ${store.type}</p>
  </div>
    `
})