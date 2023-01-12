// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishContainer">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish">
            <div class="fishImage"><img src=${fish.image}></div>
            <div class="fishInfo">
            <p>name: ${fish.name}</p>
            <p>species: ${fish.species}</p>
            <p>size: ${fish.size}</p>
            <p>harvested: ${fish.harvested}</p>
            <p>diet: ${fish.food}</p>
            </div>
        </section>`

    }
    htmlString += `</article>`

    return htmlString

}

/*
<section class="fish" id="1">
                <div class="fishImage">
                    <img
                        src=" https://media.npr.org/assets/news/2009/08/09/lionfish-9f7f0480b3c6c767897b092ce3ecc3fd91e7d44f-s1100-c50.jpg">
                </div>
                <div class="fishInfo">
                    <p>species: pterois volitans</p>
                    <p>length: 11.5 inches</p>
                    <p>name: Kenneth</p>
                    <p>harvested: St. Thomas, US Virgin Islands</p>
                    <p>diet: small fish and crustaceans</p>
                </div>
            </section>
            */