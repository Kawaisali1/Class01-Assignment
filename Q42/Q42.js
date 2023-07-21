"use strict";
// /*
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.
// */
// function show_magicians(){
//     function make_great(a:String){
//     let magicianName = ['Harry Houdini', 'Dynamo', 'David Copperfield', 'Criss Angel', 'David Blaine']
//     for(let i = 0; i < magicianName.length; i++)
//     console.log(magicianName[i]);
//         console.log(magicianName.join(a));
//     }
// }
// show_magicians();
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
