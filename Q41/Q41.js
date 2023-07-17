/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
the name of each magician in the array.
*/
function show_magicians() {
    var magicianName = ['Harry Houdini', 'Dynamo', 'David Copperfield', 'Criss Angel', 'David Blaine'];
    for (var i = 0; i < magicianName.length; i++)
        console.log(magicianName[i]);
}
show_magicians();
