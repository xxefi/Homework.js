
function Date(hour, minute, second) {
    const totalSecond = hour * 3600 + minute * 60 + second;
    return totalSecond;
}
console.log((`Время в секундах:`), Date(12,45,36));