
let accordion = document.getElementsByClassName("accordion");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", ()=>{
    accordion[i].classList.toggle("active");
    let panel = accordion[i].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}