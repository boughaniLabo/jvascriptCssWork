init_width = 0 ; 
next =document.getElementById('next') ; 
prev=document.getElementById('prev')  ; 
prog =document.getElementById('prog') ; 
circles =document.querySelectorAll('.circle');
console.log(circles) ; 
activated = 1  ; 
next.addEventListener('click' , function(){
    activated++ ; 
    if(activated>circles.length){
        activated = circles.length
    }
    console.log('hello world ')  ; 
    update()

}) ;  
prev.addEventListener('click',function(){
    activated-- ; 
    if(activated<1){
        activated = 1 
    } ; 
    update() ; 
}) ; 
update = function(){
    for (let index = 0; index < circles.length; index++) {
        if (index < activated){
            circles[index].classList.add('active') ; 
        } else {
            circles[index].classList.remove('active'); 
        }
        
    }
    width  = (activated / circles.length)  * 100; 
     prog.style.width  = width + '%'; 
    if(activated  == 1 ){
        prev.disabled = true  ; 
    }else if(activated == circles.length ) {
        next.disabled = true  ; 
    }else {
        next.disabled = false   ; 
        prev.disabled = false  ; 
    }

}; 