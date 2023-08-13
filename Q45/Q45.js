"use strict";
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function carDetails(manufacturer, modelName, color, optionalFeature) {
    let carObj = {
        manufacturer,
        modelName,
        color,
        optionalFeature
    };
    if (manufacturer === "Honda" && modelName === "Civic" && color === "Black" && optionalFeature === "Booster") {
        console.log("The details of car are");
        console.log(carObj);
    }
    else
        console.log("Information didn't match");
}
carDetails("Honda", "Civic", "Black", "Booster");
