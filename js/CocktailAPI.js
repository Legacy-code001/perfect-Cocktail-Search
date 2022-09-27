class CocktailAPI{
     // Get recipe by name
     async getDrinksByName(name) {
          // Search by name
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
          // Returns a json respone
          const cocktails = await apiResponse.json();

          return {
               cocktails
          }
     }

     // Get recipes by ingredient
     async getDrinksByIngredient(ingredient) {
          // Search by Ingredient
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          // Wait for response then return JSON
          const cocktails = await apiResponse.json();

          return {
               cocktails
          }
     }

     // get single recipe 
     async getSingleRecipe(id) {
          // Search by Ingredient
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          // Wait for response then return JSON
          const recipe = await apiResponse.json();

          return {
               recipe
          }
     }

     // Retrieves all the Categories from the REST API
     async getCategories() {
          const apiResponse = await fetch('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
          // Wait for response and return JSON
          const categories = await apiResponse.json();

          return {
               categories
          }
     }

     // Get Drinks By Category
     async getDrinksByCategory( category ) {
          // Search by Category
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
          // Wait for response then return JSON
          const cocktails = await apiResponse.json();

          return {
               cocktails
          }
     }

     // Get alcohol or non alcohol drinks
     async getDrinksByAlcohol( term ) {
          // Search by Category
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
          // Wait for response then return JSON
          const cocktails = await apiResponse.json();

          return {
               cocktails
          }
     }
}