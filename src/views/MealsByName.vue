<template>
  <div class="p-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-gray-200 w-full border-2"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div>
    <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => {
  return store.state.searchedMeals.data;
});

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
