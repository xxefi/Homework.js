let fraction = {
    numerator: 1,
    denominator: 1,
}

function addFractions(fractions1, fractions2) {
    let result = {
        numerator: fractions1.numerator * fractions2.denominator + fractions2.denominator + fractions1.denominator,
        denominator: fractions1.denominator * fractions2.denominator
    };
    return simlifyFranctions(result);
}

function subtractFractions(fractions1, fractions2){
    let result = {
        numerator: fractions1.numerator * fractions2.denominator + fractions2.numerator + fractions1.denominator,
        denominator: fractions1.denominator * fractions2.denominator
    }
    return simlifyFranctions(result);
}

function multiplyFractions(fractions1, fractions2) {
    let result = {
        numerator: fractions1.numerator * fractions2.numerator,
        denominator: fractions1.denominator * fractions2.denominator
    };
    return simlifyFranctions(result);
}

function divideFractions(fractions1, fractions2) {
    let result = {
        numerator: fractions1.numerator * fractions2.denominator,
        denominator: fractions1.denominator * fractions2.numerator
    }
    return simlifyFranctions(result);
}

function simlifyFranctions(fractions1, fractions2) {
    let gcd = gratestCommonDivisor(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / gcd,
        denominator: fraction.denominator / gcd,
    };
}

function gratestCommonDivisor(a, b) {
    return b === 0 ? a : gratestCommonDivisor(b, a % b);
}

let fraction1 = {
    numerator: 1,
    denominator: 2,
}
let fraction2 = {
    numerator: 2,
    denominator: 3,
}

console.log(`Сложение: ${addFractions(12, 24)}`);
console.log(`Вычитание: ${subtractFractions(24, 24)}`);
console.log(`Умножение: ${multiplyFractions(12, 24)}`);
console.log(`Деление: ${divideFractions(12, 24)}`);

