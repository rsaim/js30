"use strict";

function addContent() {
    var showcase = document.getElementById('showcase');

    return data.map(function (data) {
        var renderHTML = `
        <div class='box'>
        <a target='_blank' href='${data.url}'>
            <img alt='${data.title}' src='${data.img}'>
            <div class='title-grad'>
                <span class='title'>${data.title}</span>
            </div>
        </a>
        </div>`;
        showcase.insertAdjacentHTML("beforeend", renderHTML);
    });
}

window.onload = addContent;

var data = [{
    title: "JavaScript Drum Kit",
    url: "./js30/01 - JavaScript Drum Kit/index-START.html",
    img: "./images/01 - JavaScript Drum Kit.png"
}, {
    title: "JS and CSS Clock",
    url: "./js30/02 - JS and CSS Clock/index-START.html",
    img: "./images/02 - JS and CSS Clock.png"
}, {
    title: "Update CSS Variables with JS",
    url: "./js30/03 - CSS Variables/index-START.html",
    img: "./images/03 - CSS Variables.png"
}, {
    title: "Flex Panel Gallery",
    url: "./js30/05 - Flex Panel Gallery/index-START.html",
    img: "./images/05 - Flex Panel Gallery.png"
}, {
    title: "Type Ahead",
    url: "./js30/06 - Type Ahead/index-START.html",
    img: "./images/06 - Type Ahead.png"
}, {
    title: "HTML5 Canvas",
    url: "./js30/08 - Fun with HTML5 Canvas/index-START.html",
    img: "./images/08 - Fun with HTML5 Canvas.png"
}, {
    title: "Hold Shift and Check Checkboxes",
    url: "./js30/10 - Hold Shift and Check Checkboxes/index-START.html",
    img: "./images/10 - Hold Shift and Check Checkboxes.png"
    },
    // {
    // title: "Custom Video Player",
    // url: "./js30/11 - Custom Video Player/index-START.html",
    // img: "./images/11 - Custom Video Player.png"
    // },
    {
    title: "Key Sequence Detection",
    url: "./js30/12 - Key Sequence Detection/index-START.html",
    img: "./images/12 - Key Sequence Detection.png"
}, {
    title: "Slide in on Scroll",
    url: "./js30/13 - Slide in on Scroll/index-START.html",
    img: "./images/13 - Slide in on Scroll.png"
}, {
    title: "Local Storage",
    url: "./js30/15 - LocalStorage/index-START.html",
    img: "./images/15 - LocalStorage.png"
}, {
    title: "Mouse Move Shadows",
    url: "./js30/16 - Mouse Move Shadow/index-START.html",
    img: "./images/16 - Mouse Move Shadow.png"
    },
    // {
    // title: "Webcam Fun",
    // // url: "./js30/19 - Webcam Fun/index-START.html",
    // img: "./images/19 - Webcam Fun.png"
    // },
    {
    title: "Speech Detection",
    url: "./js30/20 - Speech Detection/index-START.html",
    img: "./images/20 - Speech Detection.png"
}, {
    title: "Follow Along Link Highlighter",
    url: "./js30/22 - Follow Along Link Highlighter/index-START.html",
    img: "./images/22 - Follow Along Link Highlighter.png"
}, {
    title: "Speech Synthesis",
    url: "./js30/23 - Speech Synthesis/index-START.html",
    img: "./images/23 - Speech Synthesis.png"
}, {
    title: "Sticky Nav & Parallax",
    url: "./js30/24 - Sticky Nav/index-START.html",
    img: "./images/24 - Sticky Nav.png"
}, {
    title: "Stripe Follow Along Nav",
    url: "./js30/26 - Stripe Follow Along Nav/index-START.html",
    img: "./images/26 - Stripe Follow Along Nav.png"
}, {
    title: "Click and Drag",
    url: "./js30/27 - Click and Drag/index-START.html",
    img: "./images/27 - Click and Drag.png"
}, {
    title: "Video Speed Controller",
    url: "./js30/28 - Video Speed Controller/index-START.html",
    img: "./images/28 - Video Speed Controller.png"
},
// {
//     title: "Countdown Timer",
//     url: "./js30/29 - Countdown Timer/index-START.html",
//     img: "./images/29 - Countdown Timer.png"
// },
{
    title: "Whack A Mole",
    url: "./js30/30 - Whack A Mole/index-START.html",
    img: "./images/30 - Whack A Mole.png"
    }];

// Ref: https://github.com/afuh/js30