"use strict";
/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
let usernamesCopy = ['admin', 'Sajid', 'majid', 'Jutt', 'jim'];
if (usernamesCopy.includes('admin')) {
    console.log('Hello admin, would you like to see a status report?');
}
else {
    for (let i = 0; i < usernamesCopy.length - 2; i++) {
        let newUsernames = usernamesCopy.filter((element) => element !== usernamesCopy[0]);
        if (newUsernames[i] == usernamesCopy[i + 1]) {
            console.log(`Hello ${newUsernames[i]}, Thanks for logging in again.`);
        }
        break;
    }
}
for (let i = 0; i < usernamesCopy.length; i++) {
    usernamesCopy = usernamesCopy.filter((element) => element !== usernamesCopy[i]);
}
if (usernamesCopy.length != 0) {
    console.log(("\nList of users is not empty."));
}
else if (usernamesCopy.length == 0) {
    console.log("We need to find users.");
}
