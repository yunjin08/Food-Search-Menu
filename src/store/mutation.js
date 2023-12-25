export const setSearchedMeals = (state, meals) => {
  state.searchedMeals.data = meals;
};

export const setMealsByLetter = (state, meals) => {
  state.mealsByLetter.data = meals;
};

export const setMealsByIngredients = (state, meals) => {
  state.mealsByIngredients.data = meals;
};
