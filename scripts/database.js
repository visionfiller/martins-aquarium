// fill the objects with the data of the fish
const database = {
    fish: [
        {
            name: "Kenneth",
            species: "pterois volitans",
            food: "small fish and crustaceans",
            size: "11.5 inches",
            harvested: "St Thomas US Virgin Islands",
            id: 1,
            image: "https://media.npr.org/assets/news/2009/08/09/lionfish-9f7f0480b3c6c767897b092ce3ecc3fd91e7d44f-s1100-c50.jpg"
        },
        {
            name: "Larry",
            species: "leopoldi stingray",
            food: "small worms and crustaceans",
            size: "8.75 inches",
            harvested: "Maui, Hawaii",
            id: 2,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2020/09/leopoldi-stingray-1.jpg"
        },
        {
            name: "Samantha",
            species: "asterias rubens",
            food: "small fish and crustaceans",
            size: "4 inches",
            harvested: "Alaska",
            id: 3,
            image: "https://www.tfhmagazine.com/-/media/Project/OneWeb/TFH/US/articles/618_sea_stars_for_the_marine_aquarium.jpg"
        },
        {
            name: "Kimiko",
            species: "asian arowana",
            food: "sushi",
            size: "23.5 inches",
            harvested: "Japan",
            id: 4,
            image: "https://media-be.chewy.com/wp-content/uploads/asian-arowana.jpg"
        },
        {
            name: "Karen",
            species: "homo aquarius",
            food: "baguettes and scones",
            size: "5 feet 3 inches",
            harvested: "Denmark",
            id: 5,
            image: "https://nationaltoday.com/wp-content/uploads/2022/08/18-Mermaid-Day.jpg"
        }
    ]
}

// export the function so it can be used in other modules
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}