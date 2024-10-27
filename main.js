const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const userDash = document.getElementById('user-dash');
const Logout = document.getElementById('Logout');


userDash.addEventListener('click', ()=>{
    window.location.href = 'StudentDashboard.html';
    
})

Logout.addEventListener('click', ()=>{
    localStorage.removeItem("onlineUser");
    window.location.href = "login.html"
  
})

function setIndex(){
  const onlineUser = JSON.parse(localStorage.getItem("onlineUser"))
  userDash.textContent = onlineUser.username
  signIn.style.display = "none"
  signUp.style.display = "none"
  userDash.style.display = "block"
  Logout.style.display = "block"

  
}
setIndex();