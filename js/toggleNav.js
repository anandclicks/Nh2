const toggleBtn = document.querySelectorAll(".navbar-toggler-icon")
const toggleNav = document.querySelector("#navbarMenu")
let a=0
Array.from(toggleBtn).forEach(e=> {
  e.addEventListener("click",()=> {
    if(a==0) {
      toggleNav.style.display = "flex"
      document.querySelector("body").style.overflow = "hidden"
      a=1
    }
    else {
      toggleNav.style.display = 'none'
      document.querySelector("body").style.overflow = "auto"
      a=0
    }
  })
})