let ul =document.querySelectorAll(".date_coloer li");
let div = document.querySelector("div")
for(let i=0; i <ul.length; i++){
    console.log(i)
   ul[i].addEventListener("click",function(e){   
    // الدخول الي عنصر div ومعرفة لون الخلفيه 
    div.style.backgroundColor 
    =
    // الدخول الي ملف css ومعرفة لون خلفية li اللتي تم الضغط عليها
    window.getComputedStyle(this).backgroundColor



    window.localStorage.setItem("coloer",window.getComputedStyle(this).backgroundColor)
}) 
}
let coloer = window.localStorage.getItem("coloer");
div.style.backgroundColor = coloer