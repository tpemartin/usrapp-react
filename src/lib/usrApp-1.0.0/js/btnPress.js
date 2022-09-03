document.addEventListener("DOMContentLoaded", function() {
  //btnSignup=document.querySelector("body > div");
  //btnSignup.addEventListener("mousedown", btnpress);
  //btnSignup.addEventListener("mouseup", btnunpress);
  attachPress2classElements("btnSignup");
  attachPress2classElements("btnCalendar");
  attachPress2classElements("share-shareFrame-shareBtn");
});
function attachPress2classElements(classname){
    let btnSignupS=document.getElementsByClassName(classname);
    for(let i=0; i < btnSignupS.length; i++){
      attachPressEventListener(btnSignupS[i]);
    }
  }
function btnpress(){
    this.classList.add("pressed"); //btnSignup
}
function btnunpress(){
    this.classList.remove("pressed");//btnSignup
}
function attachPressEventListener(btnSignup){
  btnSignup.addEventListener("mousedown", btnpress);
  btnSignup.addEventListener("mouseup", btnunpress);
}
