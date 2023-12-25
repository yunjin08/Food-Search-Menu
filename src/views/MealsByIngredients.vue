<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 px-24">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals" class="flex justify-center text-gray-600">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByIngredients.data);

onMounted(() => {
  store.dispatch("searchMealsByIngredients", route.params.ingredients);
});
</script>
