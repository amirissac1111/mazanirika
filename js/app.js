const openBtn = document.getElementById("svg-open")
const closeBtn = document.getElementById("svg-close")
const menuNone = document.getElementById("menu-none")
const erorBtn = document.getElementById("eror-none-btn")
const erorNone = document.getElementById("eror-none")
const cardEror = document.getElementById("card-eror")
const cardEror1 = document.getElementById("card-eror1")
const cardEror2 = document.getElementById("card-eror2")

openBtn.addEventListener("click", () => {
    menuNone.classList.add("menu-block")
})
closeBtn.addEventListener("click", () => {
    menuNone.classList.remove("menu-block")
})
cardEror.addEventListener("click", () => {
    erorNone.classList.add("eror-block")
})
cardEror1.addEventListener("click", () => {
    erorNone.classList.add("eror-block")
})
cardEror2.addEventListener("click", () => {
    erorNone.classList.add("eror-block")
})
erorBtn.addEventListener("click", () => {
    erorNone.classList.remove("eror-block")
})