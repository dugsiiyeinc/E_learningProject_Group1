const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const userDash = document.getElementById('user-dash');
const Logout = document.getElementById('Logout');
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

userDash.addEventListener('click', ()=>{
    window.location.href = 'StudentDashboard.html';
    
})

Logout.addEventListener('click', ()=>{
    localStorage.removeItem("onlineUser");
    window.location.href = "login.html"
  
    
})

function setIndex(){
  const onlineUser = JSON.parse(localStorage.getItem("onlineUser"))
  if(onlineUser){
    userDash.textContent = onlineUser.username
    signIn.style.display = "none"
    signUp.style.display = "none"
    userDash.style.display = "block"
    Logout.style.display = "block"
    enrolButton.textContent = "Enroll"
  }
  else{

  }
  
  
}
setIndex();


function enrollBtn(){
  
}

enrolButton.addEventListener('click', (e)=>{
  if(enrolButton.textContent == "Enroll"){
  
    modal.style.display = 'block'

  }
  else{
    e.preventDefault();
    modalClose();
        window.location.href='login.html'
      
  }



   
})
// closeModal.addEventListener('click', ()=>{
//     modal.style.display = 'none'
// })


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
