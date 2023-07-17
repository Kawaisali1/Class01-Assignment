/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a
different message.
*/
// with default size 
function make_shirt() {
    var size = "Large", message = "I love TypeScript";
    console.log("The size of shirt is ".concat(size, " and \"").concat(message, "\" should be written on it."));
}
function large_shirt() {
    var message = "I love TypeScript", size = 'Large';
    console.log("The size of shirt is ".concat(size, " and \"").concat(message, "\" should be written on it."));
}
function medium_shirt() {
    var message = "I love TypeScript.", size = 'medium';
    console.log("The size of shirt is ".concat(size, " and \"").concat(message, "\" should be written on it."));
}
function shirt(size, message) {
    console.log("The size of shirt is ".concat(size, " and \"").concat(message, "\" should be written on it."));
}
make_shirt();
large_shirt();
medium_shirt();
shirt("Medium", "Lord");
