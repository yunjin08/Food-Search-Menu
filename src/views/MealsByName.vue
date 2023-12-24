<template>
  <div class="p-8 px-24">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-gray-200 w-full border-2"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 px-24">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-64 w-full object-cover"
      />
      <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
      <div class="p-3">
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
        <router-link to="/">View</router-link>
      </div>
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
