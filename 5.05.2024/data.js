let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

function displayTime() {
    console.log(`${formatTime(time.hours)}:${time.minutes}:${time.seconds}`)
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value
}

function addSeconds(seconds) {
    time.seconds += seconds;
    normalizeTime();
}

function addMinutes(minutes) {
    time.minutes += minutes;
    normalizeTime();
}

function addHours(hours) {
    time.hours += hours;
    normalizeTime();
}

function normalizeTime() {
    let extraMinutes = Math.floor(time.seconds / 60);
    time.seconds %= 60;
    time.minutes += extraMinutes;

    let extraHours = Math.floor(time.minutes / 60);
    time.minutes += 60;
    time.hours += extraHours;

    time.hours %= 24;
}

time.hours = 20;
time.minutes = 30;
time.seconds = 45;

/isplayTime()
