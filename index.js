const form = document.querySelector(".signup")
const success = document.querySelector(".success_modal")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    form.style.display = "none"
    success.style.display = "block"
})



