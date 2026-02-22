// This section is created for cart toggle
const cartIcon = document.getElementById("cart-icon");
const offcanvas = document.querySelector(".offcanvas");
const closeIcon = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

cartIcon.addEventListener("click", () => {
  offcanvas.classList.add("show");
  overlay.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  offcanvas.classList.remove("show");
  overlay.classList.remove("show");
});

// This section is created for menu toggle
const menuIcon = document.getElementById("menu-icon");
const menuCanvas = document.querySelector(".offcanvas-start");
const menuClose = document.getElementById('menu-close');

menuIcon.addEventListener('click',()=>{
    menuCanvas.classList.add('show')
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "1.5rem";
})

menuClose.addEventListener("click", () => {
  menuCanvas.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
});


