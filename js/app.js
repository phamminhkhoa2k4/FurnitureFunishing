//display and hide taskbar 
const menuOpenBtn = document.querySelector(".js-open");
const closeOpenBtn = document.querySelector(".js-close");
const taskbar = document.querySelector(".js-taskbar"); 

const openSignInBtn = document.querySelector(".js-sign-in");
const modalSignIn = document.querySelector(".js-modal-sign-in");
const closeSignInBtn = document.querySelector(".js-modal-sign-in-icon-close");
const modalSignInContainer = document.querySelector(".js-modal-sign-in-container");

const openSignUpBtn = document.querySelector(".js-sign-up");
const modalSignUp = document.querySelector(".js-modal-sign-up");
const closeSignUpBtn = document.querySelector(".js-modal-sign-up-icon-close");
const modalSignUpContainer = document.querySelector(".js-modal-sign-up-container");

const openContactBtn = document.querySelector(".js-icon-message-open");
const closeContactBtn = document.querySelector(".js-icon-message-close");
const closeContactIcon = document.querySelector(".js-contact-header-icon-close");
const modalContact = document.querySelector(".js-modal-contact");
const openClickHereContactUs = document.querySelector(".js-contact-us-open-click-here");

// modal contact
openContactBtn.addEventListener("click",()=>{
    modalContact.style.right = "18px";
    openContactBtn.classList.add("hide");
    closeContactBtn.classList.remove("hide");
});
// openClickHereContactUs.addEventListener("click",()=>{
//     modalContact.style.right = "18px";
//     closeContactBtn.classList.remove("hide");
//     openContactBtn.classList.add("hide");

// });
closeContactBtn.addEventListener("click",()=>{
    modalContact.style.right = "-100%";
    closeContactBtn.classList.add("hide");
    openContactBtn.classList.remove("hide");
});
closeContactIcon.addEventListener("click",()=>{
    modalContact.style.right = "-100%";
    closeContactBtn.classList.add("hide");
    openContactBtn.classList.remove("hide");
});

// modal sign in
function showSignIn(){
    modalSignIn.classList.add("open");
}
function hideSignIn(){
    modalSignIn.classList.remove("open");
}
openSignInBtn.addEventListener("click",showSignIn);
closeSignInBtn.addEventListener("click",hideSignIn);
modalSignIn.addEventListener("click",hideSignIn);
modalSignInContainer.addEventListener("click",function(event){
    event.stopPropagation()
});
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27){
        modalSignIn.classList.remove('open');
    } 
});

// 

const openSignInBtn2 = document.querySelector(".js-sign-in2");
function showSignIn(){
    modalSignIn.classList.add("open");
}
function hideSignIn(){
    modalSignIn.classList.remove("open");
}
openSignInBtn2.addEventListener("click",showSignIn);
closeSignInBtn.addEventListener("click",hideSignIn);
modalSignIn.addEventListener("click",hideSignIn);
modalSignInContainer.addEventListener("click",function(event){
    event.stopPropagation()
});
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27){
        modalSignIn.classList.remove('open');
    } 
});

// modal sign up
function showSignUp(){
    modalSignUp.classList.add("magic");
}
function hideSignUp(){
    modalSignUp.classList.remove("magic");
}
openSignUpBtn.addEventListener("click",showSignUp);
closeSignUpBtn.addEventListener("click",hideSignUp);
modalSignUp.addEventListener("click",hideSignUp);
modalSignUpContainer.addEventListener("click",function(event){
    event.stopPropagation()
});
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27){
        modalSignUp.classList.remove('magic');
    } 
});








//open 
menuOpenBtn.addEventListener("click",()=>{
    taskbar.style.left = "-100%";
    closeOpenBtn.classList.remove("hide");
    menuOpenBtn.classList.add("hide");
    

});
//close
closeOpenBtn.addEventListener("click",()=>{
    taskbar.style.left = "0" ;
    menuOpenBtn.classList.remove("hide");
    closeOpenBtn.classList.add("hide");
    
});



// storage register
function register(){
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirm", confirm);
   
  

}

// storage sign in
function signIn(){
    var email = document.getElementById("mail").value;
    var password = document.getElementById("password-sign-in").value;
    var emailCheck = localStorage.getItem("email");
    var passwordCheck = localStorage.getItem("password");

    if(email.value == "" && password.value ==""){
        alert("please enter again")

    }else{
    if(email == emailCheck && password == passwordCheck){
        modalSignUp.classList.remove('magic');
        
    }
    else{
        modalSignUp.classList.remove('magic');
       
    }
}

}
// slider
var index = 1;
    changeImage = function(){
        var images = ["./asset/img/slider/home-furniture.jpg","./asset/img/slider/home-homeoffice.jpeg","./asset/img/slider/home-livingroom.jpg","./asset/img/slider/home-bedroom.jpg","./asset/img/slider/home-diningroom.jpg","./asset/img/slider/home-outdoor.jpg"];
        document.getElementById("image").src = images[index];
        index++;
        if(index == 6){
            index = 0;
        }
    }
    setInterval(changeImage,3000);


// relative 

const iconArrow = document.getElementsByClassName('icon-arrow');
const relativeProduct = document.getElementsByClassName('relative-product');
const relativeProductPage = Math.ceil(relativeProduct.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// responsive view

let responsive_relative = window.matchMedia("(max-width:767px)");
if(responsive_relative.matches){
    movePer = 50.36;
    maxMove = 504;
}let right_mover = ()=>{
    l = l + movePer;
    if(relativeProduct == 1){
        l = 0
    }
    for(const i of relativeProduct){
        if(l > maxMove){
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }
}

let left_mover = ()=>{
    l = l - movePer;
    if(l <= 0){
        l = 0;
    }
    for(const i of relativeProduct){
        if(relativeProductPage > 1){
            i.style.left = '-' + l + '%';
        }
        
    }
}

iconArrow[1].onclick = ()=>{right_mover();}
iconArrow[0].onclick = ()=>{left_mover();}


// loading 
// const loader = document.getElementById("main");
// const loading = document.getElementById("loading");

// window.addEventListener("load", function() {
//     loader.style.display = 'none';

// });

// window.onload = () =>{
//     loading.style.display = 'block';
//     loader.style.display = 'none';

    
// }



// toggle contact us

// const backChatBtn = document.querySelector(".js-back-chat-btn");
// const toggleMessage = document.querySelector(".js-message-chat");
// const toggleSend = document.querySelector(".massege-inner-icon-send");
// const headerContactUS = document.querySelector(".js-header-contactus");
// const bodyContactUS = document.querySelector(".js-bodycontactus");
// const boxChat = document.querySelector(".js-box-chat");

// toggleMessage.addEventListener('click',()=>{
//     boxChat.classList.remove("hide");
//     bodyContactUS.classList.add("hide");

// });


