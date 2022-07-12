window.addEventListener('scroll' ,processALL);
function processALL(){

var height = window.innerHeight/2;
var range = document.getElementById('skill');
var prog = range.getBoundingClientRect().top;
console.log(prog); 


if(prog < height){
const process = document.getElementById("html");
process.style.width = process.getAttribute('data-target');

const css = document.getElementById("css");
css.style.width = css.getAttribute('data-target');

const bs = document.getElementById("bs");
bs.style.width = bs.getAttribute('data-target');

const sass = document.getElementById("sass");
sass.style.width = sass.getAttribute('data-target');

const js = document.getElementById("js");
js.style.width = js.getAttribute('data-target');

const react = document.getElementById("react");
react.style.width = react.getAttribute('data-target');

    }
}

document.addEventListener("DOMContentLoaded" ,() =>{
    function counter(id,start , end , duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            } 
        },step);
    }
    counter("twitter",0,1587,3000);
    counter("utube",100,3900,2500);
    counter("facebook",0,3400,3000);


})
