// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

let items = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

let exchangeRate = 80;

let convertedItems = Object.fromEntries(Object.entries(items).map(([key, value]) => [key, value * exchangeRate]));

console.log(`Original items: `, items)
console.log(`Converted items (USD to INR):`, convertedItems)