/*The function must accept the following values 
as input (i.e. it needs parameters), in the following order.
 - An object representing a piece of pottery that was made at the wheel in 
 the makePottery function.
 - A number specifying the firing temperature of the kiln. */

//The function must add a new property of fired with the value of true to the object.

//The function must add a new property of cracked to the object.

/*If the temperature of the kiln is above 2200 degrees then 
cracked property must have a value of true.
If the temperature of the kiln is at, or below, 
2200 degrees then cracked property must have a value of false. */

export const firePottery = (potteryPiece, tempurature) =>{
    potteryPiece.fired = true
    if (tempurature > 2200){
        potteryPiece.cracked = true
    } else {
         potteryPiece.cracked = false
        }
    
        return potteryPiece
    }; 

    /*firePottery is exported to main.js to add .cracked and .fired
    properties to each piece of pottery and determine if each is cracked based on temp */
