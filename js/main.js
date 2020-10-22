'use strict';

// variable 'button' to represent <button> element
let button = document.getElementById("dark_mode");

// function to change classes & create dark mode
function darkModeCallBack() {
    document.querySelector("h1").classList.toggle("text-light");

    // changes container class colors
    let container = document.querySelectorAll(".container");
    container.forEach(each =>{
        each.classList.toggle("bg-dark");
        each.classList.toggle("text-light");
    })

    // changes table class colors
    let table = document.querySelectorAll("table");
    table.forEach(each =>{
        each.classList.toggle("bg-dark");
        each.classList.toggle("text-light");
    })

    // changes body background image
    document.querySelector("body").classList.toggle("body-dark");


}

// event listener to the 'button' element that looks for 'click' type events
button.addEventListener("click", darkModeCallBack);