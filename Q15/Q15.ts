/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
new set of invitations. You’ll have to think of someone else to invite.*/

let sr1 = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahtishan"];

for (let i = 0; i < sr1.length; i++ ){
    console.log(sr1[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
    
}

console.log("\n\n");

console.log(sr1[0] + " would not be able to make it to the dinner.");

console.log("\n\n");

sr1.splice(0, 1, "Ahmed Nawaz")

for(let i = 0; i < sr1.length; i++){
    console.log(sr1[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
    
} 
