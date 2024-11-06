const ContentCourse  = document.querySelector(".c-c");
const coursDetail  = document.querySelector(".course-detail");
const coursetitle  = document.querySelector(".course-title");
const contentParag = document.querySelector(".c-p");
const c_b_payment  = document.querySelector(".c-b-payment");
const videotrailer  = document.querySelector(".video-trailer");
const paymetnCont  = document.querySelector(".paymetn-cont");
const cont1  = document.querySelector(".cont-1");



fetchData =async()=>{
    let url="JSON/courses.json"
    
    let response = await fetch(url)
    console.log(response);
    let getdatafromlocal = await response.json()
    
    let data = JSON.parse(localStorage.getItem("courses_details")) || (function() {
       
    let defaultData = getdatafromlocal;
    localStorage.setItem("courses_details", JSON.stringify(defaultData));
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
      <div class="card-course">
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
                    <i class="fa-regular fa-clock"></i><span>Course price: ${element.price}</span>
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
    
    let userdata = JSON.parse(localStorage.getItem('currentUser')) ;
    
    if(userdata){
    let currentusername = document.querySelector(".currentusername")
      currentusername.innerText = userdata.fullname
      account.innerText = userdata.fullname.charAt(0);
    allbtn.forEach(element=>{
    element.classList.add("hide")
    
    account.classList.remove("hide")
    })
    
    }else{
    allbtn.forEach(element=>{
    element.classList.remove("hide")
    
    account.classList.add("hide")
    })
    
    }
    
    account.addEventListener("click", function() {
      accountinfo.classList.toggle("hide")
    
    
    })
          }