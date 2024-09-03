let worlds = ['FUN', 'GOOD', 'POWERFUL', 'NICE', 'ROMANTIC', 'DRAMATIC'];
const span = document.querySelector('span')
let char = 0;
let index = 0;
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(type,500)
})
function type(){
    if(char<worlds[index].length){
        span.textContent+=worlds[index].charAt(char)
        char++;
        setTimeout(type,200)
    }
    else{
        setTimeout(earse,200)
    }
  
}
function earse(){
    if(char>0){
        span.textContent=worlds[index].substring(0,char-1)
        char--;
        setTimeout(earse,500)

    }
    else{
        index++;
        if(index>=worlds.length){
            index=0;
        }
        setTimeout(type,200)
    }
}