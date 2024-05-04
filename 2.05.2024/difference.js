
function secondToTime(hour, minute, second) {
    const totalSecond = hour * 3600 + minute * 60 + second;
    return totalSecond;
}

function TimeToSecond(second) {
    const hours = Math.floor(second / 3600);
    const remainingSecondsAfterHours = second % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const remainingSeconds = remainingSecondsAfterHours % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function Date(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const second1Total = secondToTime(hours1, minutes1, seconds1);
    const second2Total = secondToTime(hours2, minutes2, seconds2);

    const differenceSeconds = Math.abs(second1Total - second2Total);
    return TimeToSecond(differenceSeconds);
}
console.log(Date(12,30,45,9,45,20));