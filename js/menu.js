

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu-link");
const icons = document.querySelectorAll("i");
;
console.log('hamburger', hamburger);
hamburger.addEventListener("click", function (event) {
    // console.log('event :', event)
    const isVisible = mobileMenu.getAttribute('data-visible');

    try {
        if (isVisible == "true") {

            // qari hiding
            mobileMenu.setAttribute('data-visible', "false");
            icons[0].setAttribute('data-visible', "true");
            icons[1].setAttribute('data-visible', "false");
        
           
    
            
    
        } else {
            // soo bandhig showing
            mobileMenu.setAttribute('data-visible', "true");
            icons[0].setAttribute('data-visible', "false");
            icons[1].setAttribute('data-visible', "true");
           
           
            
            
        }
        
    } catch (error) {
        console.error(error,"Something went wrong");
    }

  
   
});







