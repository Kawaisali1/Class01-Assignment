/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
  in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits = ['Banana', 'Apple', 'Apricot'];

if(favorite_fruits.includes('Banana')){
    console.log(`I really like ${favorite_fruits[0]}`);
}

if (favorite_fruits.includes('Apple')) {
    console.log(`I really like ${favorite_fruits[1]}`);
}

if(favorite_fruits.includes('Apricot')){
    console.log(`I really like ${favorite_fruits[2]}`);
}

if (favorite_fruits.includes('pomegranates')) {
    console.log("I really like pomegranates");
}

if (favorite_fruits.includes('Coconut')) {
    console.log("I really like Coconut");
}