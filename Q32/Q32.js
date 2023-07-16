/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
  the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message
  that the person will need to enter a new username. If a username has not been used, print a message saying
  that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ['Amjad', 'Ravi', 'Nikola', 'Arif', 'Ahsan'];
var new_users = ['Bhavi', 'Haris', 'Amjad', 'Sadiq', 'Shafiq'];
for (var i = 0; i < current_users.length; i++) {
    for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
        var users = current_users_1[_i];
        if (current_users[i].toLowerCase() === new_users[i].toLowerCase()) {
            console.log("You will need to enter a new username.");
            break;
        }
        else if (current_users[i].toLowerCase() !== new_users[i].toLowerCase()) {
            console.log("Username is available.");
            break;
        }
    }
    if (current_users[i].toLowerCase() !== new_users[i].toLowerCase()) {
        break;
    }
}
