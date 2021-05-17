const showList = document.querySelector('.additional-services__more');
const servicesList = document.querySelector('.make-order__labels');

showList.addEventListener("click", () => {
    servicesList.classList.toggle("show-labels");
    showList.classList.toggle("additional-services__less");
});


const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slider__slides');
const btn = document.querySelectorAll('.types__cars');
const dots = document.querySelectorAll('.slider__dots')
let index = 0;

const activeSlide = number =>{
    for(let slide of slides){
        slide.classList.remove("active-slide");
    }
    slides[number].classList.add("active-slide");
}

const activeBtn = number =>{
    for(let button of btn){
        button.classList.remove("active");
    }
    btn[number].classList.add("active");
}

const activeDot = number =>{
    for(let dot of dots){
        dot.classList.remove("active-dot");
    }
    dots[number].classList.add("active-dot");
}

const currentSlide = ind =>{
    activeSlide(ind);
    activeBtn(ind);
    activeDot(ind);
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

dots.forEach((item , indexDot) => {
    item.addEventListener("click", () => {
        if(dots.length > slides.length){
            index = indexDot+2;
            currentSlide(index)
        }else{
            index = indexDot;
            currentSlide(index);
        }
    })
});

btn.forEach((item , indexBtn) => {
    item.addEventListener("click", () => {
        index = indexBtn;
        currentSlide(index);
    })
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);


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


const form = document.getElementById("form");
const submit = document.getElementById("submit");
const submitMobile = document.getElementById("submit-mobile");
const userName = document.getElementById("client-name");
const userTel = document.getElementById("client-tel");
const confirmationCheckbox = document.querySelector(".confirmation__checkbox");
const errorMessage = document.querySelector(".confirmation__error-message")

form.addEventListener("submit", (e) => {
    e.preventDefault()
});

submit.onclick = () => checkInputs();
submitMobile.onclick = () => checkInputs();


function checkInputs(){
    const userNameValue = userName.value.trim();
    const userTelValue = userTel.value.trim();

    userNameValue === ''? userName.classList.add("invalid") : userName.classList.remove("invalid");
    userTelValue === '' ? userTel.classList.add("invalid") : userTel.classList.remove("invalid");
}

confirmationCheckbox.addEventListener("input", () =>{
    confirmationCheckbox.checked ? errorMessage.style.display ='none' : errorMessage.style.display = 'block';
});


const cities = document.querySelector(".location__select-cities");
const newCity = document.createElement("option");
const cityInput = document.getElementById("addCity");
const citiesOptions = document.querySelectorAll(".location__options");

cityInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        e.preventDefault();
        newCity.value = cityInput.value.toLowerCase();
        newCity.text = cityInput.value;
        for (let i = 0; i < cities.length; i++) {
            if(cities.options[i].value === newCity.value){
                cities.options.remove(i);
            };
        };
        let newOption = new Option(newCity.text, newCity.value, true, true);
        cities.append(newOption);
        cityInput.value = '';
    }
    
});


Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vk.com/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};

