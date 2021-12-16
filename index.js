// const axios = require('axios')

const getDrinkName = (event) => {
    event.preventDefault()
    const query = document.querySelector("#drinkName").value
    getDrinks(query);
   
}

const getDrinks = async (query) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    console.log("response.data.drinks", response.data.drinks);
}



// getDrinks();
// submitBtn.addEventListener('click', () => {
//     console.log('it clicked')
// })
// const textArea = document.getElementById("drinkName").addEventListener('blur', () => {
//     let inputVal = textArea.value;
//     console.log("inputVal", inputVal )
// })
