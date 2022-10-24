/*
Define a variable in the module with a value of an empty array. 
This array will store pottery that will be sold. Do not export this array.
*/

/*
Define and export a function named toSellOrNotToSell 
that is responsible for determining if a piece of pottery should be sold.
*/

let forsalePottery = []

//The toSellOrNotToSell function must accept a pottery object as input.

/*within if..else statement: 
-the weight of the piece of pottery is greater than, or equal to, 
6 then the function must add a price property with a value of 40.
- weight of the piece of pottery is less than 6 then the function must 
add a price property with a value of 20.

-piece of pottery is cracked, do not add a price property to it.
- pottery is not cracked, add the object to the module-level array of items to be sold.
*/

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false && pottery.weight >= 6 ) {
        pottery.price = 40
        forsalePottery.push(pottery)
    } else if (pottery.cracked === false && pottery.weight < 6) {
        pottery.price = 20
        forsalePottery.push(pottery)
    }

        return pottery
    }



 /*Define and export a function named usePottery returns a copy of the 
 array of items to be sold. Recall which array method creates a copy of the array. */
 
 
 export const usePottery = () => {
    return forsalePottery.map((pottery) => ({...pottery}))
 }

 // const arrCopy = originalArr.map( origItem => ({...origItem}) )