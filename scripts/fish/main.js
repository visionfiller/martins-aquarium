// import fish function from database.js
import { getFish } from './database.js'
import { getFishTips } from './database.js'
// invoke the function to bring the array to the main js
const allFish = getFish()
// iterate the array to instance the object from the array
for (const fish of allFish) {
    console.log(fish)
}

const allTips = getFishTips()

for (const tips of allTips) {
    console.log(tips)
}
// Import the FishList function from the correct module

import { FishList } from './FishList.js'
import { fishTipsList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

   /* put the string into the html*/
const parentHTMLElement = document.querySelector(".container")
const parentTipsHTMLElement = document.querySelector(".aside")


parentHTMLElement.innerHTML = FishList()
parentTipsHTMLElement.innerHTML = fishTipsList()