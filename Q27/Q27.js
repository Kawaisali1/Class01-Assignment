"use strict";
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
let alien_Color = ['green', 'yellow', 'red'];
//  this segment of code passes test
if (alien_Color[0] == 'green') {
    console.log(`If you hit the ${alien_Color[0]} alien, you will get 5 points.`);
}
else if ((alien_Color[1] == 'yellow')) {
    console.log(`If you hit the ${alien_Color[1]} alien, you will get 10 points.`);
}
else if (alien_Color[2] == 'red') {
    console.log(`If you hit the ${alien_Color[2]} alien, you will get 15 points.`);
}
else {
    console.log("Else you will have no points.");
}
