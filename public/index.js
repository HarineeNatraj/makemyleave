const sign_in_bttn=document.querySelector("#sign-in-bttn");

const log_in_bttn=document.querySelector("#log-in-bttn");

const container=document.querySelector(".container");

log_in_bttn.addEventListener('click',()=>{
    container.classList.add("log_in_bttn");
    console.log("touched");
})

sign_in_bttn.addEventListener('click',(){
    console.log("touched");
    container.classList.add("sign-up-mode");
})