// Hamburger Menu Toggle
const nav = document.getElementById('nav__mobile-ul');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
})

// Smooth Scrolling
$("#navbar a, #nav__mobile a, btn").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });