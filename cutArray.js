const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items from fruits and add to new Array (a)
let a = fruits.splice(2, 2);

console.log("fruits: ", fruits); //Banana,Orange,Kiwi
console.log("a: ", a); //Apple,Mango
