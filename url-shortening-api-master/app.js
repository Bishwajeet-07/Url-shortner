const mobile = document.querySelector(".mobile")
const humb = document.querySelector(".humburger")

humb.addEventListener("click",(e)=>{
    humb.classList.toggle("hum");
    console.log(humb.classList);

    if(humb.classList.contains("hum")){
        mobile.classList.add("mobile-flex")
    }
    else{
        mobile.classList.remove("mobile-flex")
    }
})