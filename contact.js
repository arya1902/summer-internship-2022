// const labels = document.querySelectorAll("label");
// console.log(labels);


// labels.forEach((label) => {
//     label.innerHTML = label.innerText.split("").map(function (letter, idx) {
//         return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`;
//     }).join("");

// });

const labelss = document.querySelectorAll(".labels label");
labelss.forEach((label) => {
label.innerHTML= label.innerText.split("")
    .map((letter,idx)=>{
        return `<span style="transition-delay:${idx*50}ms">${letter}</span>`;
    })
    .join("");
});
