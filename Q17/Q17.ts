/* Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner, and 
you have space for only two quests. 

Start with your program from Exercise 16, Add a new line that prints a message saying that you can invite only 
two people for dinner

Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
 
Print a message to each of each of the two people still on your list, letting them know they're still invited.

Remove the two last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.

*/

let sr3 = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahatishan"];
sr3.splice(0, 0, "Ahmed Nawaz");
sr3.unshift("Ali Hyder");
sr3.push("Atif");

for(let i = -5; i < sr3.length; i++ ){
console.log(sr3[sr3.length - 1] + ", sorry to say I wouldn't be able to invite you.");
sr3.pop();
}
console.log("\n");

for(let i = 0; i < sr3.length; i++){
    console.log(sr3[i]);
}
console.log("You both are considered for dinner.");

sr3.pop();
sr3.pop();

console.log("\n");

for(let i = 0; i == 0; i++){
console.log(sr3[i]);
}

console.log("\nSorry there will be no dinner today because of personal reasons.");
