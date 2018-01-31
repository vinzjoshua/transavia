/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//ik maak hier verschillende variabelen aan

var countCircle = document.querySelector('li:nth-of-type(4)');
var offlineLink = document.querySelector('li:nth-of-type(3)');

var count = 0;

var buttonOff1  = document.querySelector('.buttonOff1');
var buttonOn1  = document.querySelector('.buttonOn1');

var buttonOff2  = document.querySelector('.buttonOff2');
var buttonOn2 = document.querySelector('.buttonOn2');

var buttonOff3  = document.querySelector('.buttonOff3');
var buttonOn3 = document.querySelector('.buttonOn3');

var buttonOff4  = document.querySelector('.buttonOff4');
var buttonOn4 = document.querySelector('.buttonOn4');


//vervolgens maak ik mijn functies waar ik eentje op tel of eentje aftrek, dit doe ik voor elke button.

function plusOne1(){
    count += 1;
    countCircle.innerHTML = count;
    countCircle.classList.remove("displayNone");
    buttonOff1.classList.add("displayNone");
    buttonOn1.classList.remove("displayNone");



};


function minusOne1(){
    count -= 1;
    countCircle.innerHTML = count;
    buttonOff1.classList.remove("displayNone");
    buttonOn1.classList.add("displayNone");

    if (count == 0){
    countCircle.classList.add("displayNone");
    }else{}

};

function plusOne2(){
    count += 1;
    countCircle.innerHTML = count;
    countCircle.classList.remove("displayNone");
    buttonOff2.classList.add("displayNone");
    buttonOn2.classList.remove("displayNone");
};


function minusOne2(){
    count -= 1;
    countCircle.innerHTML = count;
    buttonOff2.classList.remove("displayNone");
    buttonOn2.classList.add("displayNone");

    if (count == 0){
    countCircle.classList.add("displayNone");
    }else{}
};

function plusOne3(){
    count += 1;
    countCircle.innerHTML = count;
    countCircle.classList.remove("displayNone");
    buttonOff3.classList.add("displayNone");
    buttonOn3.classList.remove("displayNone");

    if (count == 0){
    countCircle.classList.add("displayNone");
    }else{}
};


function minusOne3(){
    count -= 1;
    countCircle.innerHTML = count;
    buttonOff3.classList.remove("displayNone");
    buttonOn3.classList.add("displayNone");

    if (count == 0){
        countCircle.classList.add("displayNone");
    }else{}
};

function plusOne4(){
    count += 1;
    countCircle.innerHTML = count;
    countCircle.classList.remove("displayNone");
    buttonOff4.classList.add("displayNone");
    buttonOn4.classList.remove("displayNone");
};


function minusOne4(){
    count -= 1;
    countCircle.innerHTML = count;
    buttonOff4.classList.remove("displayNone");
    buttonOn4.classList.add("displayNone");

    if (count == 0){
    countCircle.classList.add("displayNone");
    }else{}


};

//daarna roep ik de functies aan met de bijbehorende event, functie en boolean

buttonOff1.addEventListener('click', plusOne1, false);
buttonOn1.addEventListener('click', minusOne1, false);

buttonOff2.addEventListener('click', plusOne2, false);
buttonOn2.addEventListener('click', minusOne2, false);

buttonOff3.addEventListener('click', plusOne3, false);
buttonOn3.addEventListener('click', minusOne3, false);

buttonOff4.addEventListener('click', plusOne4, false);
buttonOn4.addEventListener('click', minusOne4, false);




