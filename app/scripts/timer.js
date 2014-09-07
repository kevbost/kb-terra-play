var counter = 0;
var runClock;

function displayTime() {
    $('.timer').html(moment().hour(0).minute(0).second(counter++).format('mm:ss'));
}

function startWatch() {
    clearInterval(runClock);
    $('.timer').addClass('start')
    runClock = setInterval(displayTime, 1000);
}

function stopTime() {
    $('.timer').removeClass('start')
    clearInterval(runClock);
    runClock = setInterval(displayTime, 86400000);
}