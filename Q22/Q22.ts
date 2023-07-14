/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one 
happen. Change an index in one of your programs to produce an index error. Make sure you correct the error 
before closing the program.*/

/*They think of something you could store in a TypeScript Object. Write a program that creates Objects 
containing these items.*/
let citiesCopy = ["Karachi", "Berlin", "Sofia", "Veina", "Qatar City", "Dubai"]
let obCopy ={
    a: citiesCopy[0],
    b: citiesCopy[1],
    c: citiesCopy[2],
    d: citiesCopy[3],
    e: citiesCopy[4],
    f: citiesCopy[5],
    // g: citiesCopy[y],
}

console.log(obCopy.a);
console.log(obCopy.b);
console.log(obCopy.c);
console.log(obCopy.d);
console.log(obCopy.e);
console.log(obCopy.f);
// console.log(obCopy.g);
