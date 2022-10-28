// mobile
// nav
const ham = document.querySelector(".ham-button")
const dropdown = document.querySelector(".rightnav")

// const products = document.querySelector(".products")
// const productItems = document.querySelector(".product-items")



ham.addEventListener("click", function(){
    // console.log(overlay)
    dropdown.classList.toggle("rightnav-drop")
})
