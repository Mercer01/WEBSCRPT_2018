/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "814446";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Mercer";
}

function showMessage(el,url) {
    fetch(url)
	.then((response) => {
		return response.text()
    })
    .then((text) => {
		el.textContent = text;
	});
}

function showList(el,url) {
    fetch(url)
    .then((response) => {return response.json()})
    .then((json) => {
        for (const i of json) {
            let li = document.createElement("li");
            li.textContent = i;
            el.appendChild(li);
        }
    })
}

function startShowingMessage(el,url) {
    setInterval(showMessage,1000,el,url);
}

async function handleError(el,url) {
    const response = await fetch(url);
    if(response.ok) {
        el.textContent = await response.text();
    } else {
        el.textContent = "OH DEAR"
    }
}

function drawBox(c, url) {
    let ctx = c.getContext("2d");
    setInterval(function(){
        fetch(url)
        .then((response) => {return response.json();})
        .then((json) => {
            ctx.rect(json.x,json.y,5,5)
            ctx.stroke();
            
        })
    },1000)
}
