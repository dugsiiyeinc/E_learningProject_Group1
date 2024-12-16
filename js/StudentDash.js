const ordercards = document.querySelector(".ordercards");
      const userdash = document.querySelector("#user-dash");

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || [];
      let foundedUser = users.find(user => user.email === onlineUser.email);

      

      if (foundedUser && foundedUser.enrolledCourses) {
        foundedUser.enrolledCourses.forEach(course => {
          ordercards.innerHTML += `<div class="ordercard">
              <div class="storeimg"><img src="${course.photo}" alt=""></div>
              <div class="ordercontent">
                <div class="ordername">${course.title}
                  <p>${course.instructor}</p>
                  <p>${course.category}</p>
                  <div class="watchbtn"><button id="storebtn" data-courseid="${course.id}">Watch Now</button></div>
                </div>
              </div>
            </div>`;
        });
      }

      const watchbtn = document.querySelectorAll(".watchbtn");
      watchbtn.forEach(element => {
        element.addEventListener("click", event => {
          let courseid = event.target.dataset.courseid;
          let selectedCourse = JSON.stringify(
            foundedUser.enrolledCourses.find(c => c.id == courseid)
          );
          window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(selectedCourse)}`;
        });
      });

      const links = document.querySelectorAll(".links");
      links.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const targetSection = e.target.getAttribute("href").substring(1);
          document.querySelectorAll(".orderdetails").forEach(section => {
            section.style.display = "none";
          });
          document.getElementById(targetSection).style.display = "block";
        });
      });


      let myprofile_info = users.find(user => user.email === onlineUser.email);
 const profileForm = document.querySelector('.profile-form');

// const now = new Date();

// ${now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()}

if (myprofile_info) {
  // Display user information in "My Account" section
  document.getElementById("displayFullname").textContent = myprofile_info.fullname;
  document.getElementById("displayUsername").textContent = myprofile_info.username;
  document.getElementById("displayEmail").textContent = myprofile_info.email;

  // Display enrolled courses
  let enrolledCoursesList = document.getElementById("enrolledCoursesList");
  enrolledCoursesList.innerHTML = ""; // Clear existing list
  foundedUser.enrolledCourses.forEach(course => {
    // enrolledCoursesList.innerHTML += `
    // <li>  <strong>Course Name: </strong>${course.title}</li>
    //    <li>  <strong>Course Description: </strong>${course.description}</li>
    // <li><strong>Instructor name: </strong>${course.instructor}</li>
    // `;
    enrolledCoursesList.innerHTML += `


   
    <tr>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td>${course.price}</td>
    </tr>
    
    `;
  });
}
