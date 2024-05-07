let Car = {
    manufacturer: "KIA",
    model: "Sorento",
    year: 2016,
    averageSpeed: 160,
    speedType: "км/ч"
}

function displayCarInfo(){
    console.log(`Производитель: ${Car.manufacturer}`);
    console.log(`Модель: ${Car.model}`);
    console.log(`Год выпуска: ${Car.year}`);
    console.log(`Средняя скорость: ${Car.averageSpeed} ${Car.speedType}`);
}

function calculateTime(distance, averageSpeed) {
    let hours = distance / averageSpeed;
    let restCount = Math.floor(hours / 4);
    let totalHours = hours + restCount;

    return totalHours;
}
displayCarInfo();
let distance = 300
let travelTime = calculateTime(distance, Car.averageSpeed);
console.log(`${distance} км, ${travelTime + `ч`}`);