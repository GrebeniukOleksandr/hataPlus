document.addEventListener("DOMContentLoaded", function (){
    document.querySelector(".burger").addEventListener("click", function (){
        document.querySelector(".header").classList.toggle("open")
    })
})