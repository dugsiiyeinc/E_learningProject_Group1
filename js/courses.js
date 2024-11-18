let gategory=document.querySelector(".subcat")
let coursedisplay=document.querySelector(".coursedisplay")
let accountinfo = document.querySelector(".account-info")
let account = document.querySelector(".account")
let allbtn = document.querySelectorAll(".allbtn")
let logout = document.querySelector(".logout");
let myaccount = document.querySelector(".myaccount");
let search = document.querySelector(".search input");


fetchData =async()=>{
let url="elearning/courses.json"

let response = await fetch(url)

let getdatafromlocal = await response.json()

let data = JSON.parse(localStorage.getItem("courses")) || (function() {
let defaultData = getdatafromlocal;
localStorage.setItem("courses", JSON.stringify(defaultData));
return defaultData;
})();
diplaygategories=()=>{
let mygategory=data.reduce(function(acc, element){
if(!acc.includes(element.category)){
      acc.push(element.category)
    }
   return acc
  },['all courses'])
  mygategory.map(element => {

    gategory.innerHTML +=`<div class="cat" data-id="${element}" >${element}</div>`
  });


let filterdata=document.querySelectorAll('.cat');
filterdata.forEach((element,index) => {
  if (index === 0) {
    element.classList.add('active');
}
  element.addEventListener('click',function(e) {

    filterdata.forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');

    let filter=e.currentTarget.dataset.id;
const newGategory=data.filter(function(item){
  if(item.category===filter){
    return item
  }
});

if(filter === "all courses"){
  displaycourses(data)
}else{
  displaycourses(newGategory)
}

  });
});
    }
    search.addEventListener("keyup", (event) => {
const searchValue = event.target.value.trim().toLowerCase();
const filteredData = data.filter((item) => {
return item.title.toLowerCase().includes(searchValue);
});
displaycourses(filteredData);
});




  
displaycourses=(item)=>{
  coursedisplay.innerHTML=''
item.forEach(element => {
  // console.log(element)
  coursedisplay.innerHTML+=`
  <div class="card-course cardss-course">
          <div class="image-container">
          
            <img src="${element.photo}"  class="img" data-courseid="${element.id}"/>
          </div>
          <div class="course-content">
            <p class="description">
              ${element.title}
            </p>

            <div class="horizontal">
              <div class="enroll"><i class="fa-solid fa-users"></i>Enroll:   ${element.enrollmentCount}</div>
              <div class="lessons">
                <i class="fa-solid fa-book"></i>    ${element.lessons.length} lessons
              </div>
              <div class="start-time">
                <i class="fa-regular fa-clock"></i><span>Price: ${element.price}</span>
              </div>
            </div>
          </div>
        </div>`

  
});
}

displaycoursedetail=()=>{
  coursedisplay.addEventListener('click',(e)=>{

    if(e.target.classList.contains("img")){
        const courseID=e.target.dataset.courseid
     
const datafinded= data.find(newdata => newdata.id==courseID)

let selectedcourse=JSON.stringify(datafinded)


window.location.href=`courseDetails.html?selectedcourses=${encodeURIComponent(selectedcourse)}`



    }
    




  });
}
    
      
    
displaycoursedetail()
  displaycourses(data)
  
    diplaygategories()

let userdata = JSON.parse(localStorage.getItem('OnlineUser')) ;
account.addEventListener("click", function() {
  accountinfo.classList.toggle("hide")


})
      }

      window.addEventListener('load', fetchData);
     