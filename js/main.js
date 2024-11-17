
const signIn = document.querySelectorAll('.signIn');
const signUp = document.querySelectorAll('.signUp');
const usersDash = document.querySelectorAll('.user-dash');
const Logout = document.querySelectorAll('.Logout');

const modal = document.querySelector(".modal")
const enrolButton = document.querySelector(".btn-enroll")
const closeModal = document.getElementById('close-model')
const Golis = document.getElementById('golis');
const Hormood = document.getElementById('hormood');
const somtel = document.getElementById('somtel');
const Telesom = document.getElementById('telesom');
const creditCardNumber = document.getElementById('creditCardNumber');
const golisNumber = document.getElementById('golisNumber');
const hormoodNumber = document.getElementById('hormoodNumber');
const somtelNumber = document.getElementById('somtelNumber');
const telesomeNumber = document.getElementById('telesomeNumber');
const expMonth = document.getElementById('expMonth');
const expYear = document.getElementById('expYear');
const cVv = document.getElementById('cVv');
const cards = document.getElementById('cards');
const selectCards = document.getElementById('selectCards');
const localPayment = document.getElementById('localPayment');
const proceed = document.getElementById('proceed')

usersDash.forEach(userDash =>{
   
  userDash.addEventListener('click', (e)=>{
    
    e.preventDefault();
      window.location.href = 'StudentDashboard.html';
      
  })
})


Logout.forEach(logOutBtn =>{

  logOutBtn.addEventListener('click', ()=>{
      localStorage.removeItem("onlineUser");
      window.location.href = "login.html"
    
      
  })
})
setIndex()
function setIndex(){
  try {
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser"))
    if(onlineUser){
      const signIn = document.querySelectorAll('.signIn');
  const signUp = document.querySelectorAll('.signUp');
  const usersDash = document.querySelectorAll('.user-dash');
  const Logout = document.querySelectorAll('.Logout');
  
  
      usersDash.forEach(userDash => {
        userDash.textContent = onlineUser.username;
        userDash.style.display = "block";
      });
      usersDash[0].textContent = onlineUser.username
      usersDash[1].textContent = onlineUser.username
      signIn[0].style.display = "none"
      signIn[1].style.display = "none"
      signUp[0].style.display = "none"
      signUp[1].style.display = "none"
      usersDash[0].style.display = "block"
      usersDash[1].style.display = "block"
      Logout[0].style.display = "block"
      Logout[1].style.display = "block"
      enrolButton.textContent = "Enroll"
    }
    
  } catch (error) {
    console.error(Error, "Something went wrong")
  }
 
 
  
  
}

// setIndex();

function enrollBtn(){
  
}

closeModal.addEventListener('click', modalClose);

function modalClose(){
  modal.style.display = 'none'
}

enrolButton.addEventListener('click', (e)=>{
  try {
    if(enrolButton.textContent == "Enroll"){
  
      modal.style.display = 'block'
  
    }
    else{
      e.preventDefault();
      modalClose();
          window.location.href='login.html'
        
    }
    
  } catch (error) {
    console.error("Error", "Something went wrong")
  }
 



   
})

closeModal.addEventListener('click', modalClose);

function modalClose(){
  modal.style.display = 'none'
}

window.onclick = function(event){
  if(event.target == modal){
    modalClose()
  }
}





Golis.addEventListener('click', ()=>{
  
  golisNumber.style.display = 'block'
  hormoodNumber.style.display = 'none'
  somtelNumber.style.display = 'none'
  telesomeNumber.style.display = 'none'
  creditCardNumber.style.display = 'none'
  expMonth.style.display = 'none'
  expYear.style.display = 'none'
  cVv.style.display = 'none'
  
})
Hormood.addEventListener('click', ()=>{
  
  golisNumber.style.display = 'none'
  hormoodNumber.style.display = 'block'
  somtelNumber.style.display = 'none'
  telesomeNumber.style.display = 'none'
  creditCardNumber.style.display = 'none'
  expMonth.style.display = 'none'
  expYear.style.display = 'none'
  cVv.style.display = 'none'
  
})
somtel.addEventListener('click', ()=>{
  
  golisNumber.style.display = 'none'
  hormoodNumber.style.display = 'none'
  somtelNumber.style.display = 'block'
  telesomeNumber.style.display = 'none'
  creditCardNumber.style.display = 'none'
  expMonth.style.display = 'none'
  expYear.style.display = 'none'
  cVv.style.display = 'none'
  
})
Telesom.addEventListener('click', ()=>{
  
  golisNumber.style.display = 'none'
  hormoodNumber.style.display = 'none'
  somtelNumber.style.display = 'none'
  telesomeNumber.style.display = 'block'
  creditCardNumber.style.display = 'none'
  expMonth.style.display = 'none'
  expYear.style.display = 'none'
  cVv.style.display = 'none'
  
})
cards.addEventListener('click', ()=>{
  
  golisNumber.style.display = 'none'
  hormoodNumber.style.display = 'none'
  somtelNumber.style.display = 'none'
  telesomeNumber.style.display = 'none'
  localPayment.style.display = 'none'
  creditCardNumber.style.display = 'block'
  expMonth.style.display = 'block'
  expYear.style.display = 'block'
  cVv.style.display = 'block'
  

  
})