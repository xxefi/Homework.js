let shoppingList = [
    {
        name: `Молоко`,
        count: 1,
        purchased: false
    },
    {
        name: `Ноутбук`,
        count: 4,
        purchased: true
    },
    {
        name: `Клавиатура`,
        count: 1,
        purchased: true
    }
]

function displayShopList() {
    let unPurchased = shoppingList.filter(i => i.purchased === false)
    let purchased = shoppingList.filter(i => i.purchased === true)
    let sortedList = unPurchased.concat(purchased);

    sortedList.forEach(i => {
        alert(`${i.name} - ${i.count} шт - ${i.purchased ? `Куплено` : `Не куплено`}`);
    })
}

function addPurchase() {
    let name = prompt("Введите название продукта:");
    let count = parseInt(prompt("Введите количество: "));

    let item = shoppingList.find(i => i.name === name);

    if (item)
        item.count += count;
    else
        shoppingList.push(
            {
                name: name,
                count: count,
                purchased: false
            })
}

function buyProduct() {
    let name = prompt("Введите название продукта, который вы купили: ")
    let itemToBuy = shoppingList.find(i => i.name === name);
    if (itemToBuy) {  
        displayShopList();
        itemToBuy.purchased = true;
        
    }
    else {
        alert(`Продукт не найден в списке покупок`);
    }
}
displayShopList();
addPurchase();
buyProduct();