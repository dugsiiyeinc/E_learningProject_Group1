const switchForm = document.querySelector("#switchForm");
const formTitle = document.querySelector("#form-title");
const authButton = document.querySelector("#authButton");
const authSwitch = document.querySelector("#authSwitch");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

let signIn = true;
document.body.addEventListener('click', 
    (e)=>{
        if(e.target.id !== "switchForm") return;

        switchAuthForm();
    
})

const authForm = document.querySelector("#authForm");
authForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    function isValidEmail(email) {
      // Regular expression to match email format
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the email matches the regular expression
      return regex.test(email);
    }
    const emailval = email.value;
    let validemail;
    const isValid = isValidEmail(emailval);
    validemail=emailval

    if (
      username.value == "" ||
      email.value == "" ||
      confirmPassword.value == "" ||
      password.value == ""
    ) {
      Swal.fire({
        title: "Please enter full informatin",
        // icon: 'question',
        // iconHtml: '؟',
        confirmButtonText: "ok"
      });

 
    } 
    else if(isValid !==true){
      Swal.fire({
          title: "Please enter correct email",
          // icon: 'question',
          // iconHtml: '؟',
          confirmButtonText: "ok"
        });
    }
    else if (password.value !== confirmPassword.value) {
      Swal.fire({
        title: "plz match passwords",
        // icon: 'question',
        // iconHtml: '؟',
        confirmButtonText: "ok"
      });

   
    } else {
      let myData = {
        username: username.value,
        email: validemail,
        password: password.value,
        confirmpassword: confirmpassword.value,
        enrolledCourses: []
      };

      let data = [];
      data = JSON.parse(localStorage.getItem("users")) || [];

      if (
        data.some((data) => {
          return data.email == email.value;
        })
      ) {
        Swal.fire({
          title: "duplicate data",
          // icon: 'question',
          // iconHtml: '؟',
          confirmButtonText: "ok"
        });
      } else {
        data.push(myData);
        localStorage.setItem("users", JSON.stringify(data));

        window.location.href = "login.html";
      }
    }
  });
  span.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  let userdata = JSON.parse(localStorage.getItem("onlineUser"));

  if (userdata) {
    let currentusername = document.querySelector("#userDash");
    currentusername.innerText = userdata.username;
    // account.innerText = userdata.fullname.charAt(0);
    // allbtn.forEach((element) => {
    //   element.classList.add("hide");

    //   account.classList.remove("hide");
    // });
  } else {
    // allbtn.forEach((element) => {
    //   element.classList.remove("hide");

    //   account.classList.add("hide");
    // });
  }
//   account.addEventListener("click", function () {
//     accountinfo.classList.toggle("hide");
//   });

//   let bars = document.querySelector(".bars i");
//   let left = document.querySelector(".left");
//   bars.onclick = () => {
//     bars.classList.toggle("fa-xmark");
//     left.classList.toggle("open");
//   };