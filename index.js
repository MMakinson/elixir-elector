const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
const drinkResult = document.getElementById('drinkResultDisplay');
const imgResult = document.getElementById('imgDisplay');

const getDrinkName = (event) => {
    // prevent html form from reloading the whole page as a default bx
    event.preventDefault()
    const query = document.querySelector("#drinkName").value
    // what is the query value here? It returns as completely blank if I hit search without entering anything into the input field
    console.log("query value:", query)
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
    for (let drinks in response) {
        console.log(`${response[drinks].strDrink}`)
    }
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
    // how can I make this cleaner/less lines of code?
    const drinkName = response.data.drinks[0].strDrink
    const drinkType= response.data.drinks[0].strAlcoholic
    const drinkImg = response.data.drinks[0].strDrinkThumb
    const glassType = response.data.drinks[0].strGlass
    // if there is no drink information then display nothing rather than null
    const ingred1 = response.data.drinks[0].strIngredient1
    const ingred2 = response.data.drinks[0].strIngredient2
    const ingred3 = response.data.drinks[0].strIngredient3
    const ingred4 = response.data.drinks[0].strIngredient4
    const ingred5 = response.data.drinks[0].strIngredient5
    // how can this part be simplified/built dynamically using a loop?
    console.log("response.data.drinks", response.data.drinks);
    drinkResult.innerHTML = `<h3>${drinkName}</h3> 
    <p>${drinkType}</p>
    <p>${glassType}</p>
    <p>${ingred1}</p>
    <p>${ingred2}</p>
    <p>${ingred3}</p>
    <p>${ingred4}</p>
    <p>${ingred5}</p>`
    imgResult.innerHTML = `<img src=${drinkImg}>`
}

    


// stretch goal: allow serach by alcohol type (would need to search each drink object for ingredient of liquor type)




