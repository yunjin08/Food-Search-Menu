<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
    </router-link>
  </div>
  <div
    v-if="meals.length === 0"
    class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 px-24"
  >
    <MealPreview
      v-for="ingredient of ingredients"
      :key="ingredient.idCategory"
      :meal="ingredient"
    />
  </div>
  <Loading v-if="isLoading" />
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
import { computed, onMounted, watch, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import axiosClient from "../axiosClient";
import Loading from "../components/Loading.vue";
import MealPreview from "../components/MealPreview.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter.data);
const isLoading = ref(true);
const ingredients = ref([]);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(async () => {
  try {
    const response = await axiosClient.get("/categories.php");
    ingredients.value = response.data.categories;
  } catch (error) {
    console.log(error);
  } finally {
    //Set Loading to False
    isLoading.value = false;
  }
});
</script>
