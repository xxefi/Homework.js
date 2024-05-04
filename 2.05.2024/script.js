/*
1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.

function Number(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;
}
console.log(Number(1, 2));

 */

/*
2. Написать функцию, которая вычисляет факториал переданного ей числа.

function Factorial(a, b) {
    return a + b;
}
console.log(Factorial(5, 12));

 */

/*
3. Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149.

function ThreeNumbers(a, b, c) {
    return `${a}${b}${c}`;
}
console.log(ThreeNumbers(1, 4, 9));

 */

/*
4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.


function LengthOrHeight(length, height) {
    if (height === undefined) {
        return length * length;
    }
    return length * height;
}
console.log(LengthOrHeight(12));

 */

/*
5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.

function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
console.log(`Результат: `)
console.log(isPerfect(28));
console.log(`Результат: `)
console.log(isPerfect(12));

 */

/*
6. Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

function perfectNumbersIsRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}
console.log(perfectNumbersIsRange(1, 22));
console.log(perfectNumbersIsRange(6, 32));

 */

/*
7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.
function Date(hour, minute = 0, second = 0) {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    const formattedSecond = second.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

console.log(Date(12,32,56));
console.log(Date(8,56));
console.log(Date(0));

 */

/*
8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.

function Date(hour, minute, second) {
    const totalSecond = hour * 3600 + minute * 60 + second;
    return totalSecond;
}
console.log((`Время в секундах:`), Date(12,45,36));

 */

/*
9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».
function Date(second) {
    const hours = Math.floor(second / 3600);
    const remainingSecondsAfterHours = second % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const remainingSeconds = remainingSecondsAfterHours % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = second.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
console.log(Date(60))

 */

/*
10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс».

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

 */
