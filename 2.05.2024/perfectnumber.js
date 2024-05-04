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
