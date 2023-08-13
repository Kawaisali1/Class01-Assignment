/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
guests to invite to dinner.

Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
you found a bigger dinner table.

Add one new quest to the beginning of the array

Add one new quest to the middle of your array. Use append() to add one new quest to the end of your list.

Print a new set of invitation messages, one for each person in your list.
*/
   

let sr2 = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahatishan"];

sr2.splice(0, 0, "Ahmed Nawaz");

// three more guest to added

console.log("\nGuys, I have found a bigger dinning table, so I am inviting three more guest.\n\n");

sr2.unshift("Ali Hyder");
sr2.splice(4, 0, "Farooq", "Atta Muhammad")
sr2.push("Atif");

for (let i = 0; i < sr2.length; i++){
console.log(sr2[i])
}

console.log("You all are invited.");
