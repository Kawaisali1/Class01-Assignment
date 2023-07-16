/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these 
animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence 
  such as Any of these animals would make a great pet!
*/

let animal = ['cow', 'goat', 'buffalo'];

for(let i = 0; i < animal.length; i++){
    console.log(`A ${animal[i]} would be a great for house.`);
}

console.log(`${animal[0]}, ${animal[1]}, and ${animal[2]} are great for houses in village.`);
