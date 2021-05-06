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

let time = 21600;
const timeCountdown = document.getElementById("countdown");

function countTime (){
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
}

setInterval(countTime, 1000);



/*validation*/

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const userName = document.getElementById("client-name");
const userTel = document.getElementById("client-tel");


form.addEventListener("submit", (e) => {

    e.preventDefault()
    checkInputs();
});

function checkInputs(){
    const userNameValue = userName.value.trim();
    const userTelValue = userTel.value.trim();

    if(userNameValue === '' || /^\s*$/.test(userNameValue)) {
        userName.classList.toggle("invalid");
    }else{
        userName.classList.toggle("valid");
    }

    if(userTelValue === ''){
        userTel.classList.toggle("invalid");
        }else{
        userTel.classList.toggle("valid");
    }

    
}
/*function validate(evt) {
    if(!userName.value) {
        userName.style.border = "0.125rem solid #FF352B";
        vt.preventDefault();
    }else if(/\s/.test(userName)){
        userName.style.border = "0.125rem solid #FF352B";
        evt.preventDefault();
    }else{
        userName.style.border= "0.125rem solid #333333";
    }
    if(!userTel.value) {
        userTel.style.border = "0.125rem solid #FF352B";
        evt.preventDefault();
    }else if(/\s/.test(userTel)){
        userTel.style.border = "0.125rem solid #FF352B";
        evt.preventDefault();
    }else{
        userTel.style.border = "0.125rem solid #333333";
    }
    return true;
}
submitInfo.addEventListener("click" , validate);*/


/*add location (пока наброски)*/ 

/*Посмотри, пожалуйста, в том ли я вообще напрвлении делаю. И что мне нужно подделать, потому что код не работает, 
а что можно сделать дальше не знаю*/

const cities = document.querySelector(".location__select");
const cityInputValue = document.getElementById("addCity").value;
const newCity = document.createElement("OPTION");
const newCityValue = document.createTextNode(cityInputValue);
const push = document.querySelector(".push")
const cityInput = document.getElementById("addCity");


function addValue(){
    newCity.appendChild(newCityValue);
    cities.insertBefore(newCity, cities.firstChild);

}

cityInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        newCity.appendChild(newCityValue);
        cities.insertBefore(newCity, cities.firstChild);       
    }else{
        e.preventDefault();
    }
    
});

/*function addNewInput (){
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