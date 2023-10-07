document.addEventListener('DOMContentLoaded',function() {
let btn=document.getElementById('OnOff');

let turn=document.getElementById('switch');

let blb=function(e){
    btn.classList.toggle("glow")
    document.body.classList.toggle('gray')
}
turn.addEventListener('click',blb);
console.log(turn)
console.log(blb)
})