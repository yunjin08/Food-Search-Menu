import axiosClient from "../axiosClient";

export const searchMeals = ({ commit }, keyword) => {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
};

export const searchMealsByLetter = ({ commit }, letter) => {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
};

export const searchMealsByIngredients = ({ commit }, ingredients) => {
  axiosClient.get(`filter.php?i=${ingredients}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals);
  });
};

export const searchTemplateMeals = ({ commit }) => {
  axiosClient.get("categories.php").then(({ data }) => {
    commit("setTemplateMeals", data.categories);
  });
};
