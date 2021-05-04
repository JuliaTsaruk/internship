/*additional menu*/

const showList = document.querySelector('.additional-services__more');
const servicesList = document.querySelector('.make-order__labels');

showList.addEventListener("click", () => {
    servicesList.classList.toggle("show-labels");
    showList.classList.toggle("additional-services__less");
})


/*slider*/

const slides = document.querySelectorAll(".slider__slides");
const button = document.querySelectorAll(".types__cars");

let slideIndex = 1;
showSlides(slideIndex);


prev.onclick = function(){
    showSlides(slideIndex -= 1); 
}

next.onclick = function(){
    showSlides(slideIndex += 1);
}

button.forEach((item,indexBtn) =>{
    item.addEventListener('click', () =>{
        showSlides (sliderIndex = indexBtn);
    })
})

function currentSlide(n) {
    showSlides(slideIndex == n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slider__slides");
    const btn = document.getElementsByClassName("types__cars");
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
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}
   
function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      let t = getTimeRemaining(endtime);
   
      hoursSpan.innerHTML = ('0' + t.hours + ":").slice(-3);
      minutesSpan.innerHTML = ('0' + t.minutes + ":").slice(-3);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}
   
let deadline = new Date(Date.parse(new Date()) +  6 * 60 * 60 * 1000);
initializeClock('countdown', deadline);



/*validation*/

let submitInfo = document.getElementById("submit");
let userName = document.getElementById("client-name");
let userTel = document.getElementById("client-tel");


function validate(evt) {
    if(!userName.value) {
        userName.style.border = "0.125rem solid red";
        /*evt.preventDefault();*/
    }else if(/\s/.test(userName)){
        userName.style.border = "0.125rem solid red";
        /*evt.preventDefault();*/
    }else{
        userName.style.border= "0.125rem solid #333333";
    }
    if(!userTel.value) {
        userTel.style.border = "0.125rem solid red";
        /*evt.preventDefault();*/
    }else if(/\s/.test(userTel)){
        userTel.style.border = "0.125rem solid red";
        /*evt.preventDefault();*/
    }else{
        userTel.style.border = "0.125rem solid #333333";
    }
    return true;
}
submitInfo.addEventListener("click" , validate);

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