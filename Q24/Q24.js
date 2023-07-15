/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and
  less than or equal to.
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
//  Tests for equality and inequality with strings
var t = "game";
var tCopy = 'game';
console.log("Is \"game\" = 'game'\t".concat(t == tCopy));
console.log("Is length of \"game\" = 'game'\t".concat(t.length == tCopy.length));
console.log("\n");
var s = "game";
var sCopy = 'game';
console.log("Is \"game\" > 'game'\t".concat(s > sCopy));
console.log("Is length of \"game\" > 'game'\t".concat(s.length > sCopy.length));
console.log("\n");
var r = "game";
var rCopy = 'game';
console.log("Is \"game\" < 'game'\t".concat(r < rCopy));
console.log("Is length of \"game\" < 'game'\t".concat(r.length < rCopy.length));
//  Tests using the lower case function
var q = "GAME";
var qCopy = 'Game';
console.log("Is (\"GAME\").toLowerCase() = ('Game').toLowerCase()\t".concat(q.toLowerCase() == qCopy.toLowerCase()));
console.log("Is length of (\"GAME\").toLowerCase() < ('Game').toLowerCase()\t".concat(q.toLowerCase() < qCopy.toLowerCase()));
console.log("Is length of (\"GAME\").toLowerCase() > ('Game').toLowerCase()\t".concat(q.toLowerCase() < qCopy.toLowerCase()));
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
//  less than or equal to
var p = 5;
var pCopy = 9;
console.log("Is 5 = 9?\t".concat(p == pCopy));
console.log("Is 5 < 9?\t".concat(p < pCopy));
console.log("Is 5 > 9?\t".concat(p > pCopy));
console.log("Is 5 <= 9?\t".concat(p <= pCopy));
console.log("Is 5 >= 9?\t".concat(p >= pCopy));
console.log("\n");
//  Tests using "and" and "or" operators
var o = 1;
var oCopy = 7;
console.log("Is 5 = 9 and 1 = 7?\t".concat(p == pCopy && o == oCopy));
console.log("Is 5 = 9 and 1 < 7?\t".concat(p == pCopy && o < oCopy));
console.log("Is 5 = 9 and 1 <= 7?\t".concat(p == pCopy && o <= oCopy));
console.log("Is 5 = 9 and 1 > 7?\t".concat(p == pCopy && o > oCopy));
console.log("Is 5 = 9 and 1 >= 7?\t".concat(p == pCopy && o >= oCopy));
console.log("\n");
console.log("Is 5 = 9 or 1 = 7?\t".concat(p == pCopy || o == oCopy));
console.log("Is 5 = 9 or 1 < 7?\t".concat(p == pCopy || o < oCopy));
console.log("Is 5 = 9 or 1 <= 7?\t".concat(p == pCopy || o <= oCopy));
console.log("Is 5 = 9 or 1 > 7?\t".concat(p == pCopy || o > oCopy));
console.log("Is 5 = 9 or 1 >= 7?\t".concat(p == pCopy || o >= oCopy));
//Test whether an item is in a array
var m = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(m.includes("1"));
console.log(m.includes("5"));
console.log(m.includes("8"));
console.log(m.includes("2"));
console.log(m.includes("7"));
console.log(m.includes("9"));
//  Test whether an item is not in a array
console.log(m.includes("k"));
console.log(m.includes("0"));
console.log(m.includes("r"));
console.log(m.includes("p"));
console.log(m.includes("xl"));
