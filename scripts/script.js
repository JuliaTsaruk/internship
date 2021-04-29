/*additional menu*/

let showList = document.querySelector('.additional-services__more');
let servicesList = document.querySelector('.make-order__labels');

function addServices (){
    servicesList.classList.toggle("show-labels");
}

function rotateArrow (){
    showList.classList.toggle("additional-services__less")
}

showList.addEventListener("click" , addServices);
showList.addEventListener("click" , rotateArrow);


/*slider*/

let slideIndex = 1;
showSlides(slideIndex);


prev.onclick = function(){
    showSlides(slideIndex -= 1); 
}

next.onclick = function(){
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__slides");
    let btn = document.getElementsByClassName("types__cars");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    btn[slideIndex - 1].className += "active";
}

/*time*/

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}
   
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      hoursSpan.innerHTML = ('0' + t.hours + ":").slice(-3);
      minutesSpan.innerHTML = ('0' + t.minutes + ":").slice(-3);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
   
var deadline = new Date(Date.parse(new Date()) +  6 * 60 * 60 * 1000);
initializeClock('countdown', deadline);



/*validation*/

let submit = document.getElementById("submit");
let formConfirmation = document.getElementById("form");
let userName = document.getElementById("client-name");
let userTel = document.getElementById("client-tel");

function validate() {
    if(!userName.value) {
        userName.style.border = "0.125rem solid red";
    }else{
        userName.style.border= "0.125rem solid #333333";
    }

    if(!userTel.value) {

        userTel.style.border = "0.125rem solid red";
    }else{
        userTel.style.border = "0.125rem solid #333333";
    }

    return true;
}

submit.addEventListener("click" , validate);

/*add location (пока наброски)*/ 

function enterInput (data){
    if(data.keyCode == 13){
        return true;
    }
    return false;
}

let cities = document.querySelector(".location__select");

function newArray(){
    let oldCities = document.getElementById("city");
    let arrayNew = [];

    for (var i = 0; i < oldCities.length; i++){9
        arrayNew.push(oldCities[i])
    }

}