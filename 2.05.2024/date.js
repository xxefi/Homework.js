function Date(hour, minute = 0, second = 0) {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    const formattedSecond = second.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

console.log(Date(12,32,56));
console.log(Date(8,56));
console.log(Date(0));
