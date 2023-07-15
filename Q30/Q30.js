"use strict";
/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
that will print a greeting to each user after they log in to a website. Loop through the array, and print a
greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
  report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let usernames = ['admin', 'Sajid', 'majid', 'Jutt', 'jim'];
if (usernames.includes('admin')) {
    console.log('Hello admin, would you like to see a status report?');
}
else {
    for (let i = 0; i < usernames.length - 2; i++) {
        let newUsernames = usernames.filter((element) => element !== usernames[0]);
        if (newUsernames[i] == usernames[i + 1]) {
            console.log(`Hello ${newUsernames[i]}, Thanks for logging in again.`);
        }
        break;
    }
}
