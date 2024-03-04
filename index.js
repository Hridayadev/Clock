var currentHours;
var currentMinutes;
var currentSeconds;
var ampm;

setInterval(() => {
    var currentDate = new Date();
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

