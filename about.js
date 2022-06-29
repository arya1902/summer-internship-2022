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
