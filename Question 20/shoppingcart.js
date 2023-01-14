//20. In the following shopping cart add, remove, edit items

// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log("The items in shopping cart:")
console.log(shoppingCart);

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log("Add 'Meat' in the beginning of your shopping cart");
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// - add Sugar at the end of your shopping cart if it has not been already added
console.log("Add 'Sugar' at the end of your shopping cart");
shoppingCart.push('Sugar');
console.log(shoppingCart);
// - remove 'Honey'
console.log("Remove 'Honey'");
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
console.log(shoppingCart);
// - modify Tea to 'Green Tea'
console.log("Modify 'Tea' to 'Green Tea'");
shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea');
console.log(shoppingCart);


