/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collects as many items as the function call provides, and it should print a summary of
the sandwich that is being ordered. Call the function three times, using a different number of arguments each
time.
*/
function Sandwiches(sandwichItems) {
    console.log("The list of Items you want sandwitch are:");
    var i = 1;
    for (var _i = 0, sandwichItems_1 = sandwichItems; _i < sandwichItems_1.length; _i++) {
        var items = sandwichItems_1[_i];
        console.log("".concat(i, ")  ").concat(items));
        i++;
    }
    console.log("\n");
}
Sandwiches(["Chicken Tikka", "Cucumber"]);
Sandwiches(["Tomato", "Onion", "Green Chutney"]);
Sandwiches(["Tomato", "Chicken Tikka", "Cucumber", "Green Chutney", "Ketchup"]);
