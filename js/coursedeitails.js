let mainContainer = document.querySelector(".coursesdetail");
let logout = document.querySelector(".logout");
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
let d = duration.map((element) => parseFloat(element));
let lastdata = d.reduce((acc, val) => acc + val);

couesanamedetail.innerText = decodeddata.title;
courseImg.setAttribute("src", decodeddata.photo);
videoContainer.setAttribute("src", decodeddata.trailer_video);
course_description.innerText = decodeddata.description;
instructor.innerText = decodeddata.instructor;
engName.innerText = decodeddata.instructor;
dura.innerText = `${lastdata} hours`;

decodeddata.lessons.forEach((element) => {
    video.innerHTML += `<div class="title">
        <i class="fa-solid fa-circle-play"></i>
        <h5><p class="description">${element.title}</p></h5>
      </div>`;
});

decodeddata.lessons.forEach((element) => {
    courseList.innerHTML += `
    <div class="svg-icon">
      <svg class="tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${element.content}</span>
    </div>`;
});

let users = JSON.parse(localStorage.getItem("users")) || [];
let onlineUser = JSON.parse(localStorage.getItem("onlineUser"));

// Event listener to enroll user in the course when `orderbtn` is clicked
orderbtn.addEventListener("click", (e) => {
    if (!onlineUser) {
        Swal.fire({
            title: "Before ordering the course, please log in",
            confirmButtonText: "OK"
        });
    } else {
        let foundUser = users.find(user => user.email === onlineUser.email);

        if (foundUser) {
            // Initialize `enrolledCourses` array if it doesn’t exist
            foundUser.enrolledCourses = foundUser.enrolledCourses || [];

            // Check if the course is already enrolled by the user
            if (!foundUser.enrolledCourses.some((enrolled) => enrolled.id === decodeddata.id)) {
                foundUser.enrolledCourses.push(decodeddata);  // Add course to user's enrolled courses
                localStorage.setItem("users", JSON.stringify(users));  // Update `users` in localStorage
                Swal.fire("Enrolled!", `${decodeddata.title} has been added to your courses`, "success");

                // Redirect to course display page with the selected course details
                let selectedcourse = JSON.stringify(decodeddata);
                window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(selectedcourse)}`;
            } else {
                Swal.fire("Already Enrolled", "You are already enrolled in this course.", "info");

                // Redirect to course display for an already enrolled course
                let selectedcourse = JSON.stringify(decodeddata);
                window.location.href = `coursdisplay.html?selectedcourses=${encodeURIComponent(selectedcourse)}`;
            }
        } else {
            console.log("User not found");
        }
    }
});

logout.addEventListener("click", () => {
    localStorage.removeItem("onlineUser");
    window.location.href = "index.html";
});
