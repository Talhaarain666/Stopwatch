var showHours = document.getElementById("showHours")
var showMinutes = document.getElementById("showMinutes")
var showSeconds = document.getElementById("showSeconds")


var hrs = 0;
var min = 0;
var sec = 0;



// setTimeout(function(){
//     console.log("TALHA")
// },1000)

// setInterval (function(){
//     console.log("TALHA")
// },1000)

var myInterval;

function startTimer() {

    myInterval = setInterval(function () {

        sec++;
        showSeconds.innerHTML = sec;
        if (sec == 59) {
            min++;
            sec = 0;
            showMinutes.innerHTML = min;
            showSeconds.innerHTML = sec;
            if (min == 59) {
                hrs++;
                showHours.innerHTML = hrs;
                min = 0;
                showMinutes.innerHTML = min;
            }
        }
    }, 1000)

}

function stopTimer() {

    clearInterval(myInterval);
}


function resetTimer() {

    hrs = 0;
    min = 0;
    sec = 0;

    showHours.innerHTML = hrs;
    showMinutes.innerHTML = min;
    showSeconds.innerHTML = sec;

}

