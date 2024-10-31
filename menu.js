const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu-link");
const icons = document.querySelectorAll("i");
;
console.log('hamburger', hamburger);
hamburger.addEventListener("click", function (event) {
    console.log('event :', event)
    const isVisible = mobileMenu.getAttribute('data-visible');

    if (isVisible == "true") {

        // qari hiding
        mobileMenu.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");
    
        const onlineUser = JSON.parse(localStorage.getItem("onlineUser"))
        if(onlineUser){
          userDash.textContent = onlineUser.username
          signIn.style.display = "none"
          signUp.style.display = "none"
          userDash.style.display = "block"
          Logout.style.display = "block"
          enrolButton.textContent = "Enroll"
        }

        

    } else {
        // soo bandhig showing
        mobileMenu.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
        
    }
});




