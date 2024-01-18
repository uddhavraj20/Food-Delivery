// navbar when click on menu
const mobileLink = document.querySelector('.sidebar');
const mobile = document.querySelector('.menu-toggle');

mobile.addEventListener("click",()=>{
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active")
})

// close menu

mobileLink.addEventListener("click",()=>{
    const menubar = document.querySelector('.is-active');
    if(window.innerWidth<= 768 && menubar){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

// move the menu right left on mobile screen

let step = 100;
// let scrolling = true;

$(".back").bind("click",(e)=>{
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click",(e)=>{
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

$(".back-menus").bind("click",(e)=>{
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next-menus").bind("click",(e)=>{
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

