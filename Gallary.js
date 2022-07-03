
var date = new Date();
document.getElementById('month').innerHTML=date.toLocaleDateString("default", {month:"long"});
document.getElementById('date').innerHTML=date.getDate();
document.getElementById('year').innerHTML=date.getFullYear();

const btn1 = document.querySelector('#btn');
const text1 = document.querySelector('.show-1');

btn1.addEventListener('click' , button);
function button(){
    text1.classList.toggle('hide-1');
   // btn1.textContent == "Read More"
    //? (btn1.textContent == "Read Less")
    //:( btn1.textContent == "Read More");
    btn1.textContent = text1.classList.contains('hide-1') ? ('Read More') : ('Read Less');
}
