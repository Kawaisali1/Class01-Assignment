/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

let alienColor = ['green', 'yellow' ,'red'];

//  this segment of code passes test
if( alienColor.includes('green')){
    console.log(`Gongrats, You hit the ${alienColor[0]} alien, you got 5 points.`);
}else if( !(alienColor.includes('green'))){
    console.log(`Gongrats, You didn't hit the ${alienColor[0]} alien, you got 10 points.`);
}
else if( alienColor[0] == 'yellow'){
    console.log(`Gongrats, You didn't hit the ${alienColor[0]} alien, you got 10 points.`);
}
else{
    console.log("Good luck for next time");
}