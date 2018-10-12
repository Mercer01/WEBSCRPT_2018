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
    const element = document.getElementById("animals");
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
    el.classList.add(string);
    return el;
}

function removeAClass(el, string) {
    el.classList.remove(string);
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
    document.querySelector(selector_append).appendChild(document.querySelector(selector_move))
}

function filler(el, array) {
    for (const i of array) {
        let li = document.createElement("li");
        li.textContent = i;
        el.appendChild(li);
    }
}

function dupe(selector) {
    const el = document.querySelector(selector);
    let new_el = el.cloneNode(true);
    new_el.removeAttribute("id");
    el.parentNode.appendChild(new_el);
}

function removeAll(selector) {
    const el = document.querySelectorAll(selector);
    for(const i of el) {
        i.parentElement.removeChild(i);
    }

}

function getUserData() {
    const username = document.querySelector("#username");
    const speed = document.querySelector("#speed");
    const student = document.querySelector("#student");
    return {
        name: username.value,
        speed: parseInt(speed.value),
        student: student.checked,
    }
    
}