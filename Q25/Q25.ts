/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
  just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will
  have no output.)
*/

let alien_color = ['green', 'yellow' ,'red'];

//  this segment of code passes test
if( alien_color[0] == 'green'){
    console.log(`Gongrats, You hit ${alien_color[0]} alien, you got 5 points.`);
//  this don't pass test
}else if( alien_color[0] == 'red'){
    console.log("You got no point.");
}
else if( alien_color[0] == 'yellow'){
    console.log("You got no point.");
}
else{
    console.log("Good luck for next time");
}