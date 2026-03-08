// animación simple al hacer scroll

const elements = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  elements.forEach(el => {

    const pos = el.getBoundingClientRect().top;

    if(pos < window.innerHeight - 100){

      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";

    }

  })

})
