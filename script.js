let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle(".open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove(".open-menu");
    menu.classList.remove("move");
}


//Email JS 
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.emil');
    let message = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || message.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, message.value);
            success();
        }
    })
}

validate();

function sendmail(name,email,message){
    emailjs.send("service_8ha8zsr","template_5ef4qse",{
        user_name: name,
        message: message,
        user_email: email,
    });

}

function emptyerror(){
    swal({
        title: "Oops!",
        text: "Fields cannot be empty!",
        icon: "error",
        button: "Cancel",
      });
}

function success(){
    swal({
        title: "Email sent succesfully!",
        text: "I will get back to you in 24 hours",
        icon: "success",
      });
}

//Header Background Change On Scroll
let header  = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll Top

let scrollTop  = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});