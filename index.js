var currentHours;
var currentMinutes;
var currentSeconds;
var ampm;

setInterval(() => {
    let currentDate = new Date();
    currentSeconds = currentDate.getSeconds();
    currentMinutes = currentDate.getMinutes();
    currentHours = currentDate.getHours();
    
    ampm = currentHours >= 12 ? 'PM' : 'AM';
    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12; 
    
    currentHours = currentHours < 10 ? '0' + currentHours : currentHours;
    currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;

    document.querySelector(".Sec").textContent = currentSeconds; 
    document.querySelector(".Min").textContent = currentMinutes; 
    document.querySelector(".Hour").textContent = currentHours;
    document.querySelector(".AMPM").textContent = ampm; 
}, 1000);


setInterval(() => {
    let date = new Date();

    let currentSeconds = date.getSeconds();
    let rotateSec = currentSeconds * 6; 
    document.querySelector(".anSec").style.transform = "rotate(" + rotateSec + "deg)";

    let currentMinutes = date.getMinutes();
    let rotateMin = currentMinutes * 6 + (currentSeconds / 10);
    document.querySelector(".anMin").style.transform = "rotate(" + rotateMin + "deg)";

    let currentHours = date.getHours();
    let rotateHr = (currentHours % 12) * 30 + (currentMinutes / 60) * 30; 
    document.querySelector(".anHr").style.transform = "rotate(" + rotateHr + "deg)";

}, 10);
