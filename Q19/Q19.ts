/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
guests to invite to dinner. */

var sr = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahatishan"];

for (let i = 0; i <= sr.length; i++ ){
    console.log(sr[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
    
}

console.log("\n\n");

console.log(sr[0] + " would not be able to make it to the dinner.");

console.log("\n\n");

sr[0] = "Ahmed Nawaz";

for(let i = 0; i <= sr.length; i++){
    console.log(sr[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
    
} 

// three more guest to added
console.log("\nGuys, I have found a bigger dinning table, so I am inviting three more guest.\n\n");

sr = ["Ali Hyder", "Ahmed Nawaz", "Farooq", "Farooq", "Khalid", "Awais", "Zeeshan", "Adil", "Ahatishan"];

sr.push("Atif");

for (let i = 0; i < sr.length; i++){
console.log(sr[i])
}

console.log("You all are invited.");

console.log("\n\nThe number of people were to be invited was " + sr.length);
