Elements = document.querySelectorAll('.panel') ; 
for (let index = 0; index < Elements.length; index++) {
    let element = Elements[index];
    element.addEventListener('click' ,function(){
        for (let j = 0; j < Elements.length; j++) {
            Elements[j].classList.remove('active') ; 
            
        }
        this.classList.add("active") ; 

    } ) ; 

    
}