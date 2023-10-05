let pop =document.querySelector(".pop-up");
let services = document.getElementById("serv");


services.addEventListener("mouseover",()=>{
    pop.style.display="block"
})

services.addEventListener("mouseout",()=>{
    pop.style.display="none"
})

/*nav bar effect code*/

let nav = document.querySelector("nav")

window.onscroll=function(){

    if(scrollY>0)
    {
       
        nav.classList.add("scroled")
    }
    else
    {
        nav.classList.remove("scroled")
    
    }
}