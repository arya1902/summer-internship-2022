
var date = new Date();
document.getElementById('month').innerHTML=date.toLocaleDateString("default", {month:"long"});
document.getElementById('date').innerHTML=date.getDate();
document.getElementById('year').innerHTML=date.getFullYear();

document.getElementById('month1').innerHTML=date.toLocaleDateString("default", {month:"long"});
document.getElementById('date1').innerHTML=date.getDate();
document.getElementById('year1').innerHTML=date.getFullYear();

const btn1 = document.querySelector('#btn');
const text1 = document.querySelector('.show-1');
const btn2 = document.querySelector('#btn2');
const text2 = document.querySelector('.show-2');

btn1.addEventListener('click' , button);
function button(){
    text1.classList.toggle('hide-1');
   // btn1.textContent == "Read More"
    //? (btn1.textContent == "Read Less")
    //:( btn1.textContent == "Read More");
    btn1.textContent = text1.classList.contains('hide-1') ? ('Read More') : ('Read Less');
   

}
btn2.addEventListener('click' , display);
function display(){
    text2.classList.toggle('hide-2');
    btn2.textContent = text2.classList.contains('hide-2') ? ('Read More') : ('Read Less');
   

}


