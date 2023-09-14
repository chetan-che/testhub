
let body = document.querySelector("body")
let slider = document.querySelector(".slider")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let show = document.querySelectorAll(".show")

left.addEventListener("click", () => {


    for(let i=0 ; i<slider.length ; i--){
        show[i].style.transform = "translate(-80vw)"
    }
   
})