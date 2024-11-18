// Retained part
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

// Modal and enrollment logic
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-payment");
    const closeModal = document.getElementById("close-modal");
    const courseTitleInput = document.getElementById("courseTitle");
    const emailInput = document.getElementById("email");
    const coursePriceInput = document.getElementById("coursePrice");
    const paymentMethodSelect = document.getElementById("paymentMethod");
    const paymentNumberInput = document.getElementById("paymentNumber");
    const proceedButton = document.getElementById("proceed");

    // Open modal with dynamic data
    async function openModal() {
        if (onlineUser && decodeddata) {
            courseTitleInput.value = decodeddata.title;
            emailInput.value = onlineUser.email;
            coursePriceInput.value = `$${decodeddata.price}`;
            modal.style.display = "block";
        } else {
            Swal.fire("Error", "please login you before you enroll the course.", "error");

            setTimeout(()=>{
                  window.location.href="login.html"
            }, 3000)
          
            
        }
    }

    // Close modal
    function closeModalHandler() {
        modal.style.display = "none";
    }

    // Proceed button handler
    async function handleProceed(e) {
        e.preventDefault();
        const selectedPaymentMethod = paymentMethodSelect.value;
        const paymentNumber = paymentNumberInput.value.trim();

        if (!selectedPaymentMethod) {
            Swal.fire("Missing Field", "Please select a payment method.", "warning");
            return;
        }

        if (!paymentNumber) {
            Swal.fire("Missing Field", "Please enter the payment number.", "warning");
            return;
        }

        const foundUser = users.find((user) => user.email === onlineUser.email);

        if (foundUser) {
            foundUser.enrolledCourses = foundUser.enrolledCourses || [];

            if (!foundUser.enrolledCourses.some((course) => course.id === decodeddata.id)) {
                foundUser.enrolledCourses.push({
                    ...decodeddata,
                    paymentMethod: selectedPaymentMethod,
                    paymentNumber: paymentNumber,
                });

                localStorage.setItem("users", JSON.stringify(users));
                Swal.fire(
                    "Success",
                    `You have enrolled in ${decodeddata.title} using ${selectedPaymentMethod}.`,
                    "success"
                );

                modal.style.display = "none";
            } else {
                Swal.fire("Info", "You are already enrolled in this course.", "info");
            }
        } else {
            Swal.fire("Error", "User not found.", "error");
        }
    }

    // Event listeners
    orderbtn.addEventListener("click", openModal);
    closeModal.addEventListener("click", closeModalHandler);
    proceedButton.addEventListener("click", handleProceed);
});
