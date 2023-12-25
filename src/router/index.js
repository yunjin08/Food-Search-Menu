import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import GuestLayout from "../components/GuestLayout.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-ingredients/:ingredients?",
        name: "byIngredients",
        component: MealsByIngredients,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
  {
    path: "/meal:id",
    name: "mealDetails",
    component: MealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
