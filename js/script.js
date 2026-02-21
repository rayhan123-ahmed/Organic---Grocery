// This section is created for cart toggle
const cartIcon = document.getElementById('cart-icon')
const offcanvas = document.querySelector('.offcanvas')
const closeIcon = document.querySelector('.btn-close')
const overlay = document.querySelector('.overlay')

cartIcon.addEventListener('click',()=>{
    offcanvas.classList.toggle('show')
    overlay.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
    offcanvas.classList.remove('show')
    overlay.classList.remove('show')
})