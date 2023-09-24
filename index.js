

// https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

let mealsArray = [];

const fechMethode = async (rech) =>  {
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + rech)
    .then((rep) => rep.json()
    .then((data) => mealsArray = data.meals))
    console.log(mealsArray);
    // displayMeals()
}

fechMethode()


const displayMeals = () => {
    if (mealsArray === null) {
    result.innerHTML = `<h2>Aucun resultat</h2>`
        
    }else{

        mealsArray.length = 15
        result.innerHTML = mealsArray
        .map((meal) => {
            let ingredients = []

            for (let i = 1; i < 21; i++) {
                if (meal[`strIngredient${i}`]) {
                    let ingredient = meal[`strIngredient${i}`]
                    let mesure = meal[`strMeasure${i}`];
                    
                    // console.log(ingredient + " - " + mesure);
                    ingredients.push(`<li>${ingredient} - ${mesure}</li>`)

                }  
            }
            
            return `
            
            <li class="card">
            <h2>${meal.strMeal} </h2>
            <p>${meal.strArea} </p>
            <p>${meal.strCategory} </p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
            <ul>${ingredients.join("")} </ul>
            
            </li>    
            `
        }
        ).join("")
    }  
}


const form = document.querySelector('form')
search.addEventListener("input", (e) => {
    fechMethode(e.target.value)
    .then(() =>displayMeals())

})
form.addEventListener("submit", (e) => {
    e.preventDefault();

    displayMeals()

})

