/*additional menu*/

const showList = document.querySelector('.additional-services__more');
const servicesList = document.querySelector('.make-order__labels');

showList.addEventListener("click", () => {
    servicesList.classList.toggle("show-labels");
    showList.classList.toggle("additional-services__less");
});


/*slider*/

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slider__slides');
const btn = document.querySelectorAll('.types__cars');
let index = 0;

const activeSlide = n =>{
    for(let slide of slides){
        slide.classList.remove("active-slide");
    }
    slides[n].classList.add("active-slide");
}

const activeBtn = n =>{
    for(let button of btn){
        button.classList.remove("active");
    }
    btn[n].classList.add("active");
}

const currentSlide = ind =>{
    activeSlide(ind);
    activeBtn(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        currentSlide(index);
    }else{
        index++;
        currentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        currentSlide(index);
    }else{
        index--;
        currentSlide(index);
    }
    
}

btn.forEach((item , indexBtn) => {
    item.addEventListener("click", () => {
        index = indexBtn;
        currentSlide(index);
    })
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);



/*time*/
/*это я перепишу... но это не точно :)*/

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
/*Вроде добавила проверку на пробелы, но теперь даже при вводе символом горит красным ... пока не понятна, 
буду разбираться уже завтра или можете намекнуть в чем дело и с preventDefault вопросы. 
Логика размещения в том, что если ввод не соответствует критериям, то не идет отпрака формы*/

let submitInfo = document.getElementById("submit");
let userName = document.getElementById("client-name");
let userTel = document.getElementById("client-tel");


function validate(evt) {
    if(!userName.value) {
        userName.style.border = "0.125rem solid #FF352B";
        /*evt.preventDefault();*/
    }else if(/\s/.test(userName)){
        userName.style.border = "0.125rem solid #FF352B";
        /*evt.preventDefault();*/
    }else{
        userName.style.border= "0.125rem solid #333333";
    }
    if(!userTel.value) {
        userTel.style.border = "0.125rem solid #FF352B";
        /*evt.preventDefault();*/
    }else if(/\s/.test(userTel)){
        userTel.style.border = "0.125rem solid #FF352B";
        /*evt.preventDefault();*/
    }else{
        userTel.style.border = "0.125rem solid #333333";
    }
    return true;
}
submitInfo.addEventListener("click" , validate);


/*add location (пока наброски)*/ 

/*Посмотри, пожалуйста, в том ли я вообще напрвлении делаю. И что мне нужно подделать, потому что код не работает, 
а что можно сделать дальше не знаю*/

const cities = document.querySelector(".location__select");
const cityInput = document.querySelector(".location-city__name");

function addNewInput (){
    let newCity = document.createElement('option');
    newCity.value = cityInput.value.toLowerCase();
    cities.add(newCity);
    cityInput.value = "";
    newCity.selected = true;
}

cityInput.addEventListener("keydown", (e) =>{
    if(e.keyCode == 13){
      addNewInput();
    }else{
        return false;
    }
      
})
        


/*share */

const vkShare = document.getElementById("vk-share");
const facebookShare = document.getElementById("facebook-share");

vkShare.addEventListener("click" , () =>{
    document.location.href = 'https://vk.com/share.php?url=';
})

facebookShare.addEventListener("click", () => {
    document.location.href = 'http://www.facebook.com/sharer.php?display=page&u=';
})