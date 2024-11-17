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
    const user = {
        username: signIn ? undefined: username.value,
        email: email.value,
        password: password.value,
    };

    

        if(signIn){
        
            const users = JSON.parse(localStorage.getItem("users")) || [];
    
            const existingUser = users.find(
                (user)=> user.email == email.value && user.password == password.value
            );
    
            if(existingUser){
                localStorage.setItem("onlineUser", JSON.stringify(existingUser));
                window.location.href='index.html'
            }else{
                alert("Invalid username and password")
                return
            }
        }else{
            const users = JSON.parse(localStorage.getItem("users")) || [];
    
            const existingUser = users.find(
                (user)=> user.username == username.value && user.email == email.value
            );
    
            if(existingUser){
                alert(`User ${existingUser.username} Already exists`)
                return
            }
            if(confirmPassword.value !== password.value){
                alert("Password mismatch")
                return
            }
        
    
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            alert("Register Successfuly")
            switchAuthForm();
        }
        
  

  
    
    
})

function switchAuthForm() {
    signIn = !signIn;
        if(signIn) {
            
            authButton.textContent = 'Sing In';
            formTitle.textContent = 'Sing In';
            username.style.display = "none";
            confirmPassword.style.display = "none";
            username.value = "";
            confirmPassword.value = "";
            email.value = '';
            password.value = '';
            authSwitch.innerHTML = 
            ` New to LearnOnline?  
            <a href="#" id="switchForm" style="color: 118411;">Register now</a>`
                    
        }else{
            authButton.textContent = 'Sing Up';
            formTitle.textContent = 'Sing Up';
            username.style.display = "block";
            confirmPassword.style.display = "block";
            authSwitch.innerHTML = 
            `Already have an account?  
            <a href="#" id="switchForm" style="color: #118411;">Sing In</a>`




        }
}