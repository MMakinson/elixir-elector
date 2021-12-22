const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

let showImg;
console.log('what is showImg initialized', showImg)
let drinkName;
console.log('what is drinkName initialized', drinkName)
let ingredList;
console.log('what is ingredList initialized', ingredList)
let drinkInst;
console.log('what is drinkInst initialized', drinkInst)

// let clearDrink =[];
const button = document.querySelector('#btn')
button.addEventListener('click', () => {
    // clearDrink.length = 0;
    // console.log("what is clear drink after clearing", clearDrink)
    if (showImg) {
        showImg.remove()
    }
    if (drinkName) {
        drinkName.remove()
    }
    if (ingredList) {
        ingredList.remove()
    }
    if (drinkInst) (
        drinkInst.remove()
    )
    randomDrink()
})

const randomDrink = async () => {
    const response = await axios.get(`${baseUrl}random.php`);
    let results = response.data.drinks;
    console.log(results)
    results.forEach((result) => {
        
        // img display grid (grid #2)
        showImg = document.createElement('img')
        document.getElementById('imgDisplay').appendChild(showImg)
        showImg.setAttribute('src', result.strDrinkThumb)
        // clearDrink.push(showImg)
        // console.log('clearDrinkArray', clearDrink)
        
        // create h2 for drink title and add text for title, add it to the drinkResultGrid3
        drinkName = document.createElement("h2")
        drinkName.innerText = result.strDrink
        document.getElementById('drinkResultGrid2').appendChild(drinkName);
        console.log('what is drinkName', drinkName)
        // clearDrink.push(drinkName)
        // console.log('clearDrinkArray', clearDrink)


        // grab the UL element and append the li's to it for ingredients
        ingredList = document.createElement('ul')
        document.getElementById('drinkResultGrid2').appendChild(ingredList)
        console.log('what is ingredlist', ingredList)
        // clearDrink.push(ingredList)
        // console.log('clearDrinkArray', clearDrink)

            if(result.strIngredient1) {
                let ingred1 = document.createElement('li')
                ingred1.innerText = result.strIngredient1
                ingredList.append(ingred1)
            }
            if(result.strIngredient2) {
                let ingred2 = document.createElement('li')
                ingred2.innerText = result.strIngredient2
                ingredList.append(ingred2)
            }
            if(result.strIngredient3) {
                let ingred3 = document.createElement('li')
                ingred3.innerText = result.strIngredient3
                ingredList.append(ingred3)
            }
            if(result.strIngredient4) {
                let ingred4 = document.createElement('li')
                ingred4.innerText = result.strIngredient4
                ingredList.append(ingred4)
            }
            if(result.strIngredient5) {
                let ingred5 = document.createElement('li')
                ingred5.innerText = result.strIngredient5
                ingredList.append(ingred5)
            }
            if(result.strIngredient6) {
                let ingred6 = document.createElement('li')
                ingred6.innerText = result.strIngredient6
                ingredList.append(ingred6)
            }
            if(result.strIngredient7) {
                let ingred7 = document.createElement('li')
                ingred7.innerText = result.strIngredient7
                ingredList.append(ingred7)
            }
            if(result.strIngredient8) {
                let ingred8 = document.createElement('li')
                ingred8.innerText = result.strIngredient8
                ingredList.append(ingred8)
            }
            if(result.strIngredient9) {
                let ingred9 = document.createElement('li')
                ingred9.innerText = result.strIngredient9
                ingredList.append(ingred9)
            }
            
            // create p tag to hold instruction info, put retrieved instruction data as text in p tag, append it to the drinkResultGrid4 div
            drinkInst = document.createElement('p')
            drinkInst.innerText = result.strInstructions
            document.getElementById('drinkResultGrid3').appendChild(drinkInst)
            console.log('what is drinkInst', drinkInst)
            // clearDrink.push(drinkInst)
            // console.log('clearDrinkArray', clearDrink)
    })
}



// get the user-inputted value from the text input field
// const getInputValue = (event) => {
//     // prevent html form from reloading the whole page as a default bx
//     event.preventDefault()
//     // pass the value of the input to the variable query
//     const query = document.querySelector("#drinkName").value
//     if (query === "random") {
//         randomDrink()
//     } else if (query.length === 1) {
//         drinkByLetter(query)
//     } else if (query === "") {
//         whoops();
//     } else {
//         getDrinks(query)
//     }
// }


// const drinkByLetter = async (query) => {
//     const response = await axios.get(`${baseUrl}search.php?f=${query}`);
//     let results = response.data.drinks;
//     console.log("response.data.drinks by letter", response.data.drinks);
//     // how can I loop over the response and pull out the data that I want for each drink?
//     results.forEach((result) => {
//         let drinkName = document.createElement("li")
//         let drinkList = document.getElementById('drinkList')
//         drinkName.innerText = result.strDrink
//         drinkList.append(drinkName)
//     })
// }

// const getDrinks = async (query) => {
//         const response = await axios.get(`${baseUrl}search.php?s=${query}`);
//         let results = response.data.drinks;
//         if (response.data.drinks !== null) {
//             // how can I loop over the response and pull out the data that I want for each drink?
//             console.log("getDrinks response is not null", response.data.drinks)
//             results.forEach((result) => {
//                 let drinkName = document.createElement("li")
//                 let drinkList = document.getElementById('drinkList')
//                 drinkName.innerText = result.strDrink
//                 drinkList.append(drinkName)
//             })
//         } else {
//             whoops();
//         }
//     }
    
//     const whoops = () => {
//         let error = document.createElement("p")
//         let errorDiv = document.getElementById('errorDiv')
//         error.innerText = "whoops! Better check your spelling and try again. Heres a random drink on the house."
//         errorDiv.append(error)
//         randomDrink()
//     }
    
    
   



