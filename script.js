    // Auto switching menu
    const li = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
   
    function activeMenu(){
        let len = sec.length;
        while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
        
    }
    activeMenu();
    window.addEventListener("scroll",activeMenu);




    // Sticky navbar
    window.addEventListener("scroll",function(){
        var header = document.querySelector("header")
        header.classList.toggle("sticky",window.scrollY > 0)
    })



// Footer moon and star animation
var btn = document.getElementById("menu");
var glowing = document.querySelectorAll(".glow");
var glowLen = glowing.length;

btn.addEventListener("mouseover", glowBg);
btn.addEventListener("mouseleave", softBg);

function glowBg(){
    for(var i=0 ; i<glowLen ; i++){
        glowing[i].setAttribute ('style', 'opacity: 0.8 !important;');
    }
   
}
function softBg(){
    for(var i=0 ; i<glowLen ; i++){
        glowing[i].setAttribute ('style', 'opacity: 0 !important;');
    }
    glowing[0].setAttribute ('style', 'opacity: 0.3 !important;');
}
