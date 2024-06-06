const timeDisplpay = document.querySelector("#timeDisplay");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");


let startTime= 0;
let elapsedTime=0;
let currentTime=0;
let intervalID;
let hrs = 0;
let mins= 0;
let secs = 0;
let paused=true;


start.addEventListener("click", () => {
    if(paused){
        paused=false;
        startTime= Date.now() - elapsedTime;
        intervalID= setInterval(update , 1000);
    }
});

pause.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }

});

reset.addEventListener("click", () => {
        paused=true;
        clearInterval(intervalID);
        startTime= 0;
        elapsedTime=0;
        currentTime=0;
        hrs = 0;
        mins= 0;
        secs = 0;
        timeDisplpay.textContent = "00:00:00";
});


function update(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000 * 60 )) % 60);
    hrs = Math.floor((elapsedTime/(1000*60*60)) % 60);

    secs= pad(secs);
    mins= pad(mins);
    hrs= pad(hrs);

    timeDisplpay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}




