
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var item1 = document.querySelector('.offline section:nth-of-type(3) ul li:nth-of-type(1)');
var item2 = document.querySelector('.offline section:nth-of-type(3) ul li:nth-of-type(2)');

var offlineDelete1 = document.querySelector('.offline section:nth-of-type(3) ul li:nth-of-type(1) img');
var offlineDelete2 = document.querySelector('.offline section:nth-of-type(3) ul li:nth-of-type(2) img');

function deleteItem1(){
    item1.classList.add("displayNone");
};

function deleteItem2(){
    item2.classList.add("displayNone");
};




offlineDelete1.addEventListener('click', deleteItem1, false);
offlineDelete2.addEventListener('click', deleteItem2, false);



