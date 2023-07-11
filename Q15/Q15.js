/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
new set of invitations. You’ll have to think of someone else to invite.*/
var sr = ["Zubair", "Farooq", "Farooq", "Awais", "Zeeshan", "Adil", "Ahtishan"];
for (var i = 0; i <= 6; i++) {
    console.log(sr[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
}
console.log("\n\n");
console.log(sr[0] + " would not be able to make it to the dinner.");
console.log("\n\n");
sr[0] = "Ahmed Nawaz";
for (var i = 0; i <= 6; i++) {
    console.log(sr[i] + ", the dinning time is 8:00 PM. I would like you to be there on mentioned venue.");
}
