/*
Dinner Guests: Working with one of the programs from exercise 14 through 18, print a message indicating the
number of people you are inviting to dinner.

*/
var sr4 = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahatishan"];
sr4.splice(0, 0, "Ahmed Nawaz");
sr4.unshift("Ali Hyder");
sr4.push("Atif");
console.log("\n\tThe total number of people invited to the dinner was ".concat(sr4.length));
