/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP814446";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Mercer";
}

function replaceText(el, string) {
    el.textContent = string ;
}

function addTextTo(el, string) {
    el.textContent = el.textContent.concat(string)
}

function moreBears() {
    const element = document.getElementById("animals")
    element.src = "http://placebear.com/400/200";
    element.alt = "A bear.";
    element.title = "A BEAR!";
    
}

function setId(el, string) {
    el.id = string;
    return el;
}

function setClass(el, string) {
    el.className = string;
    return el;
}

function addAClass(el, string) {
    el.classList.add(string)
    return el;
}

function removeAClass(el, string) {
    el.classList.remove(string)
    return el;
}

function newElement(name) {
    return document.createElement(name)

}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(id) {
    return document.querySelectorAll(id);

}

function reverseList(selector){
    const element = document.querySelector(selector);
    let length = element.childNodes.length;
    while (length--){
        element.appendChild(element.childNodes[length]);
    }
    return element
}

function mover(selector_move, selector_append) {
    
}