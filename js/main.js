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
const proceed = document.getElementById('proceed')

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

displaycoursedetail = () => {
  let users = JSON.parse(localStorage.getItem("users"))|| []
      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
      let foundeduser=users.find(user=>user.email===currentUser.email)

  orderbtn.addEventListener("click", (e) => {
    
    if (!userdata) {
      
      // Swal.fire({
      //   title: "before order the course make login",
     
      //   confirmButtonText: "ok"
      // });
    }
    
    if (foundeduser) {

      if(foundeduser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
        let selectedcourse = JSON.stringify(decodeddata);
      window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
        selectedcourse
      )}`;


        }else{
          foundeduser.enrolledCourses.push(decodeddata)
    

          let storagecourses=JSON.parse(localStorage.getItem("courses"))
          
       

        let foundeddourse=  storagecourses.find(c=>c.id===decodeddata.id)


     foundeddourse.enrollmentCount ++
     console.log(foundeddourse)


     localStorage.setItem("courses" ,JSON.stringify(storagecourses))

 


          localStorage.setItem("users", JSON.stringify(users))
        let selectedcourse = JSON.stringify(decodeddata);
      window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
        selectedcourse
      )}`;


        }
        
        }else {
      console.log("user not found")



    }

  
    } )


if(foundeduser){
if(foundeduser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
          button.textContent ="continue learning"


        }
}else{
return
}
 

        myaccount.addEventListener("click",()=>{
          window.location.href="userAccount.html"
        })
        logout.addEventListener("click",()=>{
          localStorage.removeItem("currentUser");


          window.location.href="index.html"
        })
};
displaycoursedetail();


proceed.addEventListener('click', (e)=>{
  e.preventDefault();

//   Swal.fire({
//     title: "You enrolled successfully",
 
//     confirmButtonText: "ok"

  
    
//   });
//   modalClose();
setTimeout(()=>{
  

  let selectedcourse = JSON.stringify(decodeddata);
  window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    selectedcourse
  )}`;
},3000);


  if(foundeduser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
    let selectedcourse = JSON.stringify(decodeddata);
  window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    selectedcourse
  )}`;


    }else{
      foundeduser.enrolledCourses.push(decodeddata)


      let storagecourses=JSON.parse(localStorage.getItem("courses"))
      
   

    let foundeddourse=  storagecourses.find(c=>c.id===decodeddata.id)


 foundeddourse.enrollmentCount ++
 console.log(foundeddourse)


 localStorage.setItem("courses" ,JSON.stringify(storagecourses))




      localStorage.setItem("users", JSON.stringify(users))
    let selectedcourse = JSON.stringify(decodeddata);
  window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    selectedcourse
  )}`;


    }



})

