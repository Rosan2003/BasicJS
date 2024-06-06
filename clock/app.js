setInterval(setclock,1000);

const hourhand= document.querySelector('[data-hour]');
const minhand= document.querySelector('[data-minutes]');
const sechand= document.querySelector('[data-seconds]');

function setclock(){
    const currentTime = new Date();
    const secondsratio= currentTime.getSeconds() / 60;
    const minutesratio=(secondsratio+ currentTime.getMinutes()) /60;
    const hourratio= (minutesratio + currentTime.getHours()) / 12;
    
    setRotation(sechand,secondsratio);
    setRotation(minhand, minutesratio);
    setRotation(hourhand,hourratio);
}

function setRotation(element, rotationratio){
    element.style.setProperty('--rotation',rotationratio * 360);
}

setclock();
