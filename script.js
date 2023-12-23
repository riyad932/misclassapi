function searchMeals() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const apiKey = '1';
    const apiUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=${searchInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;

            if (meals) {
                
                for (let i = 0; i < Math.min(5, meals.length); i++) {
                    const meal = meals[i];
                    const mealCard = createMealCard(meal);
                    resultsContainer.appendChild(mealCard);
                }
            } else {
                resultsContainer.innerHTML = 'No results found.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function createMealCard(meal) {
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');

    const mealName = document.createElement('h2');
    mealName.textContent = meal.strMeal;

    const mealImage = document.createElement('img');
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;

    mealCard.appendChild(mealName);
    mealCard.appendChild(mealImage);

    return mealCard;
}
