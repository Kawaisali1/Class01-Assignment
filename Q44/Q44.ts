/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
have one parameter that collects as many items as the function call provides, and it should print a summary of 
the sandwich that is being ordered. Call the function three times, using a different number of arguments each 
time.
*/

function Sandwiches(sandwichItems:String[]){
        console.log("The list of Items you want sandwitch are:");
        let i = 1;
        for(const items of sandwichItems){
        console.log(`${i})  ${items}`);
        i++;
    }
    console.log("\n");
}

Sandwiches(["Chicken Tikka", "Cucumber"]);
Sandwiches(["Tomato", "Onion", "Green Chutney"]);
Sandwiches(["Tomato", "Chicken Tikka", "Cucumber", "Green Chutney", "Ketchup"]);