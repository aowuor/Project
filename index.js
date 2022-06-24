document.addEventListener("DOMContentLoaded", function(){
    getFood();
});


function getFood(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then((data) => {
        for(food in data.meals){
            let option = document.createElement("option");
            let select = document.getElementById("options");
            select.appendChild(option);
            option.className = "elements";
            option.value = option.text;
            option.text = data.meals[food].strMeal;
            console.log((option.text));

        }
        // selected.addEventListener("onchange", displayFoodDetails(option.value));
    });
}


function displayFoodDetails(){
    etch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then((data) => {
        for(food in data.meals){
            let option = document.createElement("option");
    
            let foodTitle = document.getElementById("food-title");
            foodTitle.innerHTML = data.meals[food].strMeal;

            let foodImage = document.getElementById("main-image");
            foodImage.src = data.meals[food].strMealThumb;

            let foodInstructions = document.getElementById("food-instructions");
            foodInstructions.innerHTML = data.meals[food].strMealThumb;
        }
    });
}
