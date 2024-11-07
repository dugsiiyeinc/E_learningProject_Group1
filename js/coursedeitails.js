let mainContainer = document.querySelector(".coursesdetail");
      let logout = document.querySelector(".logout");
      let myaccount = document.querySelector(".myaccount");
      let button = document.querySelector(".orderbtn button");
      let couesanamedetail = document.querySelector(".couesanamedetail");
      let course_description = document.querySelector(".course_description p");
      let coursename = document.querySelector(".coursename");
      let imagecontainer = document.querySelector(".image-container img");
      let instructor = document.querySelector(".content-detail h5");
      let dura = document.querySelector(".content-detail .dura");
      let video = document.querySelector(".video");
      let orderbtn = document.querySelector(".orderbtn button");
      let submitbtn = document.querySelector(".submit-btn");
     

      let accountinfo = document.querySelector(".account-info");
      let account = document.querySelector(".account");
      let allbtn = document.querySelectorAll(".allbtn");
      const urldata = new URLSearchParams(window.location.search);

      let courses = urldata.get("selectedcourses");

      let decodeddata = JSON.parse(decodeURIComponent(courses));
      let duration = decodeddata.lessons.reduce(
        function (acc, value) {
          if (!acc.includes(value.duration)) {
            acc.push(value.duration);
          }

          return acc;
        },
        [0]
      );
      let d = duration.map((element) => {
        return parseFloat(element);
      });

      let lastdata = d.reduce(function (acc, val) {
        return acc + val;
      });

      account.addEventListener("click", function () {
        accountinfo.classList.toggle("hide");
      });
      // let courseduration= parseInt(duration)

      // console.log(courseduration)
      couesanamedetail.innerText = decodeddata.title;
      imagecontainer.setAttribute("src", decodeddata.photo);
      course_description.innerText = decodeddata.description;
      coursename.innerText = decodeddata.title;
      instructor.innerText = decodeddata.instructor;
      dura.innerText = `${lastdata} hours`;

      decodeddata.lessons.forEach((element) => {
        video.innerHTML += `<div class="title">
                <i class="fa-solid fa-circle-play"></i>
                <h5 >${element.content}  <p class="description">${element.title} </p></h5>
              </div>`;
      });


      let userdata = JSON.parse(localStorage.getItem("currentUser"));

      if (userdata) {
        let currentusername = document.querySelector(".currentusername")
        currentusername.innerText = userdata.fullname
        account.innerText = userdata.fullname.charAt(0);
        allbtn.forEach((element) => {
          element.classList.add("hide");

          account.classList.remove("hide");
        });
      } else {
        allbtn.forEach((element) => {
          element.classList.remove("hide");

          account.classList.add("hide");
        });
      }

      

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


submitbtn.addEventListener('click', (e)=>{
e.preventDefault();
  console.log('button clicked')
window.location.href = 'coursdisplay.html';
});


displaycoursedetail = () => {
  let users = JSON.parse(localStorage.getItem("onlineUser"))|| []
      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
      let foundeduser=users.find(user=>user.email===currentUser.email)

  orderbtn.addEventListener("click", (e) => {
    
    if (!onlineUser) {
     window.location.href = "login.html";
    }
    
    
    if (onlineUser) {

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

 


          localStorage.setItem("onlineUser", JSON.stringify(onlineUser))
        let selectedcourse = JSON.stringify(decodeddata);
      window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
        selectedcourse
      )}`;


        }
        
        }else {
      console.log("user not found")



    }

  
    } )


if(onlineUser){
if(onlineUser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
          button.textContent ="continue learning"


        }
}else{
return
}
 

        // myaccount.addEventListener("click",()=>{
        //   window.location.href="userAccount.html"
        // })
        // logout.addEventListener("click",()=>{
        //   localStorage.removeItem("currentUser");


        //   window.location.href="index.html"
        // })
};
displaycoursedetail();


let bars = document.querySelector(".bars i");
let left = document.querySelector(".left");
        bars.onclick=()=>{
          bars.classList.toggle("fa-xmark")
         left.classList.toggle("open")
}

