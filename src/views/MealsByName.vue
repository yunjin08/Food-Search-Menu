<template>
  <div class="p-8 pb-0 px-24">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-gray-200 w-full border-2"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 px-24">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-if="!meals" class="flex justify-center text-gray-600">
    There are no meals
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => {
  return store.state.searchedMeals.data;
});

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
