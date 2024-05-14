let receipt = [
  {
    name: `Молоко`,
    count: 1,
    price: 3.7,
    currency: `AZN`,
  },
  {
    name: `Ноутбук`,
    count: 4,
    price: 23.22,
    currency: `AZN`,
  },
  {
    name: `Клавиатура`,
    count: 1,
    price: 13.0,
    currency: `AZN`,
  },
];

function printReceipt() {
  alert(`Чек: `);
  receipt.forEach(r => {
    alert(`${r.name} - ${r.count} шт - ${r.price} ${r.currency}`);
  });
}

function calculateTotal(receipt) {
  let total = 0;
  receipt.forEach(r => {
    total += r.count * r.price;
  });
  return total;
}

function findMostExpensivePurchase(receipt) {
  let maxPrice = 0;
  let mostExpensivePuchase = null;
  receipt.forEach(r => {
    let totalPrice = r.count * r.price;
    if (totalPrice > maxPrice) {
      maxPrice = totalPrice;
      mostExpensivePuchase = r;
    }
  });
  return maxPrice;
}

function calculateAveragePrice(receipt) {
  let totalQuality = 0;
  let totalPrice = 0;
  receipt.forEach(r => {
    totalQuality += r.count;
    totalPrice += r.count * r.price;
  });
  return totalQuality;
}

let printButton = document.getElementById("printButton");
let calculateAll = document.getElementById("calculateAll");
let findMostExpensive = document.getElementById("findMostExpensive");
let calculateAverage = document.getElementById("calculateAverage");
printButton.addEventListener("click", function () {
  printReceipt(receipt);
});
calculateAll.addEventListener("click", function () {
  alert(`Общая сумма покупки: ` + calculateTotal(receipt) + ` AZN`);
});
findMostExpensive.addEventListener("click", function () {
  alert(`Самая дорогая покупка: ` + findMostExpensivePurchase(receipt));
});
calculateAverage.addEventListener("click", function() {
    alert(`Средняя стоимость одного товара: ` + calculateAveragePrice(receipt) + ` AZN`)
});