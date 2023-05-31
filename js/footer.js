const Footer = document.querySelector('#Footer');

fetch('footer.html')
.then(res => res.text())
.then(data => { 
    Footer.innerHTML = data
    footerInit();
})

//아코디언 메뉴바
function footerInit() {
    let accordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordion.length; i++) {
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
}
