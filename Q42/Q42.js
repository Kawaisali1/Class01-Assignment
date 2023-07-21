"use strict";
 /*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.
 */
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += ", the Great.";
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];
make_great(magicians);
show_magicians(magicians);
