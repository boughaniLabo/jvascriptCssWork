const active = function(){
    elements = document.querySelectorAll('nav .container .navBar li a') ; 
    
    for(i=0 ;i<elements.length;i++  ){
        elements[i].addEventListener("click" , (e)=>{
            for(i=0 ;i<elements.length;i++){
                elements[i].classList.remove('active');
                
            }
        e.target.classList.add("active");
      
        })
    }
}
const burger = function(){
    brg = document.getElementById("burger");
    elm = document.querySelector("nav .container .navBar") ; 
    brg.addEventListener('click' ,(e)=>{
    
        elm.classList.toggle("nav-act")
       
         
    }) 
  
}
const caroussel = ()=>{

    carousel = document.querySelector("div .slider-container .slider") ; 
    carimg = document.querySelectorAll("div .slider-container .slider img") ; 
    //button 
    btnNext = document.getElementById("next") ; 
    btnPrev = document.getElementById("prev") ; 
    //element start 
    let counter = 1  ; 
    const size = carimg[1].clientWidth;
    carousel.style.transform = 'translateX('+(-size*counter)+'px)' ;
    //event for button 
    btnNext.addEventListener('click' , ()=>{
        if (counter>carimg.length -2) {
            return false 
        }
        counter++ ; 
        carousel.style.transition="transform 1s ease-in-out"
        carousel.style.transform = 'translateX('+(-size*counter)+'px)' ;
    }) ; 
    btnPrev.addEventListener('click' , ()=>{
        if (counter<1) {
            return false 
        }
        counter-- ; 
        carousel.style.transition="transform 1s ease-in-out"
        carousel.style.transform = 'translateX('+(-size*counter)+'px)' ;
    }) ; 
    carousel.addEventListener('transitionend', ()=>{
        console.log(carimg[counter].id) ; 
        if(carimg[counter].id == 'start'){
            carousel.style.transition="none" ; 
            counter = 1  ; 
            carousel.style.transform = 'translateX('+(-size*counter)+'px)' ;
        }
        if(carimg[counter].id == 'end'){
            carousel.style.transition="none" ; 
            counter =  carimg.length - 2  ; 
            carousel.style.transform = 'translateX('+(-size*counter)+'px)' ;
        }
    })
}

const app = ()=>{
    caroussel() ; 
    active();
    burger();
}
window.onload = app();