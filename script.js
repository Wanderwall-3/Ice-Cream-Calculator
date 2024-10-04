
document.addEventListener("DOMContentLoaded", function () {
const addButton = document.getElementById("add-button");
const inventoryList = document.getElementById("inventory-list");
const totalValueSpan = document.getElementById("total-value");

const inventory = []; // Array to store ice cream objects

addButton.addEventListener("click", function () {
    const flavor = document.getElementById("flavor-input").value;
    const price = parseFloat(document.getElementById("price-input").value);
    const quantity = parseInt(document.getElementById("quantity-input").value);

    if (flavor && !isNaN(price) && !isNaN(quantity)) {
        const iceCream = { flavor, price, quantity };
        inventory.push(iceCream);
        displayInventory();
        calculateTotalValue();
    }
});

function displayInventory() {
    inventoryList.innerHTML = "";
    inventory.forEach((iceCream) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${iceCream.flavor} - $${iceCream.price} (Qty: ${iceCream.quantity})`;
        inventoryList.appendChild(listItem);
    });
}

function calculateTotalValue() {
    const totalValue = inventory.reduce((sum, iceCream) => sum + iceCream.price * iceCream.quantity, 0);
    totalValueSpan.textContent = `$${totalValue.toFixed(2)}`;
}
});