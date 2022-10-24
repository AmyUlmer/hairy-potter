// Imports go first
import { makePottery } from "./Potterywheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList}  from "./PotteryList.js"
import { usePottery } from "./PotteryCatalog.js"


// let potteryPiece= makePottery("potteryPiece, 5, 3")
// console.log(potteryPiece)

/*In the main.js module, invoke the makePottery function 
and provide the required values as arguments. Store 
the object that gets returned into a variable, and then use console.log() to view the object.*/

// Make 5 pieces of pottery at the wheel

let mug = makePottery ("mug", 1, 5)
let cup = makePottery ("cup", 3, 4)
let plate = makePottery ("plate", 5, 5)
let bowl = makePottery ("bowl", 2, 3)
let vase = makePottery ("vase", 6, 8)

// console.log (mug, cup, plate, bowl, vase);

// Fire each piece of pottery in the kiln

let firedMug = firePottery (mug, 2600 )
let firedCup = firePottery (cup, 2500)
let firedPlate = firePottery (plate, 1000)
let firedBowl = firePottery (bowl, 1500)
let firedVase = firePottery (vase, 3750)

// console.log(firedMug, firedCup, firedPlate, firedBowl, firedVase);

// Determine which ones should be sold, and their price

toSellOrNotToSell (firedMug)
toSellOrNotToSell (firedCup)
toSellOrNotToSell (firedPlate)
toSellOrNotToSell (firedBowl)
toSellOrNotToSell (firedVase)

let potteryCatalog = usePottery()

// Invoke the component function that renders the HTML list


const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = potteryList(potteryCatalog);

console.log(potteryList(potteryCatalog))


