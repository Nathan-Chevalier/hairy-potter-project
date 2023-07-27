// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2);
let bowl = makePottery("Bowl", 6, 2);
let vase = makePottery("Vase", 12, 16);
let urn = makePottery("Urn", 10, 12);
let pot = makePottery("Pot", 8, 8);

let firedMug = firePottery(mug, 2000);
let firedBowl = firePottery(bowl, 2000);
let firedVase = firePottery(vase, 1800);
let firedUrn = firePottery(urn, 2000);
let firedPot = firePottery(pot, 2000);

let sellMug = toSellOrNotToSell(firedMug);
let sellBowl = toSellOrNotToSell(firedBowl);
let sellVase = toSellOrNotToSell(firedVase);
let sellUrn = toSellOrNotToSell(firedUrn);
let sellPot = toSellOrNotToSell(firedPot);

let potteryDisplay = PotteryList();

const potteryHTML = document.querySelector(".potteryList");

potteryHTML.innerHTML = potteryDisplay;

// console.log(sellPot);
// console.log(sellMug);
// console.log(sellBowl);
// console.log(sellVase);
// console.log(sellUrn);
// console.log(potteryToSell);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
