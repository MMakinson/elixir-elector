const getDrinkName = (event) => {
    event.preventDefault()
    const query = document.querySelector("#drinkName").value
    console.log("query", query)
    if (query === "random") {
        randomDrink()
    } else {
        console.log('not random')
        getDrinks(query)
    }
}
    
const searchS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const searchF = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
const getDrinks = async (query) => {
    if(query.length === 1){
        const response = await axios.get(`${searchF}${query}`);
        console.log("response.data.drinks searchF", response.data.drinks);
    }else if (query) {
        const response = await axios.get(`${searchS}${query}`);
        console.log("response.data.drinks searchS", response.data.drinks);
    }else {
        console.log("whoops, better check your spelling and try again. Heres a random drink on the house.")
        randomDrink()
    }
}

const randomDrink = async () => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    console.log("response.data.drinks", response.data.drinks);
}

// const getAllDrinksByLetter = async (query) => {
//     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`);
//     console.log("response.data.drinks", response.data.drinks);
// }

// const getLiquor = async (query) => {
//     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}`);
//     console.log("response.data.drinks", response.data);
// }
// stretch goal: allow serach by alcohol type (would need to search each drink object for ingredient of liquor type)




// getDrinks();
// submitBtn.addEventListener('click', () => {
//     console.log('it clicked')
// })
// const textArea = document.getElementById("drinkName").addEventListener('blur', () => {
//     let inputVal = textArea.value;
//     console.log("inputVal", inputVal )
// })
