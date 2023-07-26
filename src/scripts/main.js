// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2);
let bowl = makePottery("Bowl", 6, 2);
let vase = makePottery("Vase", 12, 16);
let urn = makePottery("Urn", 10, 12);
let pot = makePottery("Pot", 8, 8);

console.log(mug);
console.log(bowl);
console.log(vase);
console.log(urn);
console.log(pot);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
