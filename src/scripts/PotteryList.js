
//The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
//Define and export a PotteryList function.

import { usePottery } from "./PotteryCatalog.js";

/*The PotteryList function must then return a single string that contains 
ALL of the pottery HTML representation.*/
export const potteryList = (potteryArray) => {
    // let potteryArray = usePottery()
    let HTMLString = ""

    for ( const pottery of potteryArray) {
     HTMLString += `<section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is {pottery.height} cm in height
         </div>
          <div class="pottery__price">Price is $${pottery.price}</div>
    </section>`
    }

    return HTMLString
};

// PotteryList() exported to main.js to use to create HTML list