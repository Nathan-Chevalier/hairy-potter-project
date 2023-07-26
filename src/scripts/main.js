// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2);
let bowl = makePottery("Bowl", 6, 2);
let vase = makePottery("Vase", 12, 16);
let urn = makePottery("Urn", 10, 12);
let pot = makePottery("Pot", 8, 8);

let firedPot = firePottery(pot, 2000);
let firedMug = firePottery(mug, 2000);
let firedBowl = firePottery(bowl, 2600);
let firedVase = firePottery(vase, 1800);
let firedUrn = firePottery(urn, 2000);

console.log(firedPot);
console.log(firedMug);
console.log(firedBowl);
console.log(firedVase);
console.log(firedUrn);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
