

let card = document.querySelector(".card");
let imagecontainer = document.querySelector(".playvideo");
let courseName = document.querySelector(".courseName");
let userdata = JSON.parse(localStorage.getItem("currentUser"));
let logout = document.querySelector(".logout");
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

decodeddata.lessons.forEach((Element) => {
  card.innerHTML += `<div class="video">
        <div class="title">
          <i class="fa-solid fa-circle-play"></i>
          <div class="displaycontent"> 
            <h5  class="videodisplay">
           ${Element.content}
          </h5>
               <p class="description">  ${Element.duration}</p> 
            </div>
        </div>
        <a
          class="url"
          href="${Element.video}"
        ></a>
      </div>`;

      courseName.innerText = Element.title
   

});

let VIDEO = document.querySelectorAll(".video");


VIDEO.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("videodisplay")) {
      let url =
        event.target.parentElement.parentElement.parentElement.querySelector(
          ".url"
        );
      let titleplay = document.querySelector(".titleplay");
  
      let title =
        event.target.textContent;
        titleplay.textContent=title
      imagecontainer.src = url;
    }
  });
});

myaccount.addEventListener("click",()=>{
          window.location.href="StudentDashboard.html"
        })
        logout.addEventListener("click",()=>{
          localStorage.removeItem("currentUser");


          window.location.href="index.html"
        })

        let bars = document.querySelector(".bars i");
let left = document.querySelector(".left");
        bars.onclick=()=>{
          bars.classList.toggle("fa-xmark")
         left.classList.toggle("open")
        }


    