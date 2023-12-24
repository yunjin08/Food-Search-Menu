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
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl h-64 w-full object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="bold">{{ meal.strMeal }}</h3>
        <p>S</p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-500 bg-red-500 hover:bg-red-600 text-white transition-colors"
            >Youtube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
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
