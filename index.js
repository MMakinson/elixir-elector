const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

const getDrinkName = (event) => {
    event.preventDefault()
    const query = document.querySelector("#drinkName").value
    console.log("query", query)
    if (query === "random") {
        randomDrink()
    } else if (query.length === 1) {
        drinkByLetter(query)
    } else {
        getDrinks(query)
    }
}
    
const drinkByLetter = async (query) => {
    const response = await axios.get(`${baseUrl}search.php?f=${query}`);
    console.log("response.data.drinks by letter", response.data.drinks);
}

const getDrinks = async (query) => {
        const response = await axios.get(`${baseUrl}search.php?s=${query}`);
        if (response.data.drinks !== null) {
            console.log("getDrinks response is not null", response.data.drinks)
        } else {
            console.log("whoops, better check your spelling and try again. Heres a random drink on the house.")
            randomDrink()
        }
    }


const randomDrink = async () => {
    const response = await axios.get(`${baseUrl}random.php`);
    console.log("response.data.drinks", response.data.drinks);
}


// stretch goal: allow serach by alcohol type (would need to search each drink object for ingredient of liquor type)

