let startButton;
let stopButton;
let fontSelect;
var x;
var text;
let endd = 0;
window.onload = function () {
    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    startButton.onclick = start;
    stopButton.onclick = stop;
};
function start() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let y = text.split('=====');
    let i = 0;

    document.getElementById('text-area').innerHTML = "";
    (function set() {
        endd = setInterval(() => { document.getElementById('text-area').innerHTML += y[i++]; if (i >= y.length) { clearInterval(endd) } }, 250);
    })();


}
function stop() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(endd)
}
function displayText() {
    startButton.disabled = false;
    stopButton.disabled = true;

    x = document.getElementById("animation").value;
    switch (x) {
        case "Exercise": document.getElementById('text-area').innerHTML = EXERCISE; text = EXERCISE; break;
        case "Juggler": document.getElementById('text-area').innerHTML = JUGGLER; text = JUGGLER; break;
        case "Bike": document.getElementById('text-area').innerHTML = BIKE; text = BIKE; break;
        case "Dive": document.getElementById('text-area').innerHTML = DIVE; text = DIVE; break;
    }
}


function changeFontSize() {

    let x = document.getElementById("fontsize").value;
    switch (x) {
        case "Tiny": document.getElementById('text-area').style.fontSize = "xx-small"; break;
        case "Small": document.getElementById('text-area').style.fontSize = "small"; break;
        case "Medium": document.getElementById('text-area').style.fontSize = "medium"; break;
        case "Large": document.getElementById('text-area').style.fontSize = "large"; break;
        case "Extra Large": document.getElementById('text-area').style.fontSize = "x-large"; break;
        case "XXL": document.getElementById('text-area').style.fontSize = "xx-large"; break;
    }

}