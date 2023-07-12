let places = ["Austalia", "Hungery", "Russia", "Oman", "Sri Lanka"];

console.log(places);
console.log("\n");

let placesSliced = places.slice();

let placesSorted = placesSliced.sort();
console.log(placesSorted);
console.log("\n");

console.log("The array is not changed.");
console.log(places);
console.log("\n");

let placesReversed = placesSliced.reverse();
console.log(placesReversed);
console.log("\n");

console.log("The array is not changed.");
console.log(places);
console.log("\n");

console.log("Original array reversed.");
console.log(places.reverse());
console.log("\n");

places.reverse();
for(let i = 0; i < places.length; i++){
    console.log(places[i]);
}
console.log("\n");

console.log(places.sort());
console.log("\n");

console.log(places.reverse());
for(let i = 0; i < places.length; i++){
    console.log(places[i]);
}