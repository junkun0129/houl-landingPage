window.addEventListener("scroll", function(){
   
   
    const chara1 = document.querySelector(".chara1"); 
    const chara2 = document.querySelector(".chara2"); 
    const chara3 = document.querySelector(".chara3"); 
    const chara4 = document.querySelector(".chara4"); 
    const chara5 = document.querySelector(".chara5"); 
    const mediaQuery1 = window.matchMedia('(max-width: 764px)')
    const mediaQuery2 = window.matchMedia('(min-width: 765px)')

    if (mediaQuery2.matches){

        chara1.classList.toggle("scroll", window.scrollY > 400);
        chara2.classList.toggle("scroll", window.scrollY > 800);
        chara3.classList.toggle("scroll", window.scrollY > 1700);
        chara4.classList.toggle("scroll", window.scrollY > 2200);
        chara5.classList.toggle("scroll", window.scrollY > 2900);
    }
    if (mediaQuery1.matches){
        chara1.classList.add("scroll");
        chara2.classList.add("scroll");
        chara3.classList.add("scroll");
        chara4.classList.add("scroll");
        chara5.classList.add("scroll");
    }

});