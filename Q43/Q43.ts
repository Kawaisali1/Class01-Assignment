/*
Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the 
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in 
a separate array. Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.
*/

function make_great(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += ", the Great.";
  }
  show_magicians(arr);
}

function show_magicians(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];
const slicedMagicians = magicians.slice();

make_great(slicedMagicians);

console.log("\n");

show_magicians(magicians);