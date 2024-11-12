let mainContainer = document.querySelector(".coursesdetail");
      let logout = document.querySelector(".logout");
      // let myaccount = document.querySelector(".myaccount");
      let button = document.querySelector(".orderbtn button");
      let couesanamedetail = document.querySelector(".course-title");
      let course_description = document.querySelector(".c-p");
      let engName = document.querySelector(".ENG");
      let coursename = document.querySelector(".coursename");
      let videoContainer = document.querySelector(".video-container iframe");
      let instructor = document.querySelector(".content-detail h5");
      let dura = document.querySelector(".content-detail .dura");
      let video = document.querySelector(".video");
      let orderbtn = document.querySelector(".orderbtn button");
      let courseImg = document.querySelector(".course-img");
      let courseList = document.querySelector(".course-list");

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

      // account.addEventListener("click", function () {
      //   accountinfo.classList.toggle("hide");
      // });
      // let courseduration= parseInt(duration)

      // console.log(courseduration)
      couesanamedetail.innerText = decodeddata.title;
      courseImg.setAttribute("src", decodeddata.photo);
      videoContainer.setAttribute("src", decodeddata.trailer_video);
      course_description.innerText = decodeddata.description;
      // coursename.innerText = decodeddata.title;
      instructor.innerText = decodeddata.instructor;
      engName.innerText = decodeddata.instructor;
      dura.innerText = `${lastdata} hours`;

      decodeddata.lessons.forEach((element) => {
        video.innerHTML += `<div class="title">
                <i class="fa-solid fa-circle-play"></i>
                <h5 > <p class="description">${element.title} </p></h5>
              </div>`;
      });

      decodeddata.lessons.forEach((element) => {
        courseList.innerHTML += ` 
        <div class="svg-icon"><svg class="tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="absolute h-6 w-6 text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
        <span>${element.content}</span>
        </div>
                `;
      });

      let userdata = JSON.parse(localStorage.getItem("currentUser"));

      // if (userdata) {
      //   let currentusername = document.querySelector(".currentusername")
      //   currentusername.innerText = userdata.fullname
      //   account.innerText = userdata.fullname.charAt(0);
      //   allbtn.forEach((element) => {
      //     element.classList.add("hide");

      //     account.classList.remove("hide");
      //   });
      // } else {
      //   allbtn.forEach((element) => {
      //     element.classList.remove("hide");

      //     account.classList.add("hide");
      //   });
      // }

    //   displaycoursedetail = () => {
    //     let users = JSON.parse(localStorage.getItem("users"))|| []
    //         let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
    //         let foundeduser=users.find(user=>user.email===currentUser.email)

    //     orderbtn.addEventListener("click", (e) => {
          
    //       // if (!userdata) {
    //       //   let selectedcourse = JSON.stringify(decodeddata);
    //       //   window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    //       //     selectedcourse
    //       //   )}`;
            
    //       // }
          
    //       if (foundeduser) {

    //         if(foundeduser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
    //           let selectedcourse = JSON.stringify(decodeddata);
    //         window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    //           selectedcourse
    //         )}`;


    //           }else{
    //             foundeduser.enrolledCourses.push(decodeddata)
          

    //             let storagecourses=JSON.parse(localStorage.getItem("courses"))
                
             

    //           let foundeddourse=  storagecourses.find(c=>c.id===decodeddata.id)


    //        foundeddourse.enrollmentCount ++
    //        console.log(foundeddourse)


    //        localStorage.setItem("courses" ,JSON.stringify(storagecourses))

       


    //             localStorage.setItem("users", JSON.stringify(users))
    //           let selectedcourse = JSON.stringify(decodeddata);
    //         window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(
    //           selectedcourse
    //         )}`;


    //           }
              
    //           }else {
    //         console.log("user not found")



    //       }

        
    //       } )
      

    //  if(foundeduser){
    //   if(foundeduser.enrolledCourses.some(enrolled=>enrolled.id===decodeddata.id)){
    //             button.textContent ="continue learning"


    //           }
    //  }else{
    //   return
    //  }
       
   
    //   //         myaccount.addEventListener("click",()=>{
    //   //           window.location.href="userAccount.html"
    //   //         })
    //   //         logout.addEventListener("click",()=>{
    //   //           localStorage.removeItem("currentUser");


    //   //           window.location.href="index.html"
    //   //         })
    //   // };
    //   displaycoursedetail();


    //   // let bars = document.querySelector(".bars i");
    //   // let left = document.querySelector(".left");
    //   //         bars.onclick=()=>{
    //   //           bars.classList.toggle("fa-xmark")
    //   //          left.classList.toggle("open")
    //   }

     

// Function to enroll in a course
// function enrollCourse() {
//   // Ensure `decodeddata` contains the course details
//   const course = {
//     id: decodeddata.id,
//     title: decodeddata.title,
//     description: decodeddata.description,
//     instructor: decodeddata.instructor,
//     duration: `${lastdata} hours`,
//     trailer_video: decodeddata.trailer_video,
//     photo: decodeddata.photo,
//     lessons: decodeddata.lessons,

//   };

  

  
//   let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];


//   if (!enrolledCourses.some((enrolled) => enrolled.id === course.id)) {
//     enrolledCourses.push(course);
//     localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
//     Swal.fire("Enrolled!", `${course.title} has been added to your courses`, "success");
    
//   } else {
//     Swal.fire("Already Enrolled", "You are already enrolled in this course.", "info");
//   }
// }
// // Add the enroll function to the button
document.querySelector("#proceed").addEventListener("click", displaycoursedetail);


displaycoursedetail = () => {
  let users = JSON.parse(localStorage.getItem("users"))|| []
      let currentUser = JSON.parse(localStorage.getItem("onlineUser")) || []
      let foundeduser=users.find(user=>user.email===currentUser.email)

  orderbtn.addEventListener("click", (e) => {
    
    if (!userdata) {
      Swal.fire({
        title: "before order the course make login",
     
        confirmButtonText: "ok"
      });
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
          window.location.href="StudentDashboard.html"
        })
        logout.addEventListener("click",()=>{
          localStorage.removeItem("onlineUser");


          window.location.href="index.html"
        })
};



