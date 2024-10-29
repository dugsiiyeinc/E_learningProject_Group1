const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const userDash = document.getElementById('user-dash');
const Logout = document.getElementById('Logout');
const modal = document.querySelector(".modal")
const enrolButton = document.querySelector(".btn-enroll")
const closeModal = document.getElementById('close-model')

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