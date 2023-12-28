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
  <div
    v-if="meals.length === 0 && !$route.params.letter"
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
    <div
      v-if="meals && meals.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 px-24"
    >
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div
      v-else
      class="flex justify-center items-center font-serif text-3xl text-[#696223] h-[80vh]"
    >
      We apologize, but there are currently no available meals for the selected
      criteria.
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Loading from "../components/Loading.vue";
import MealPreview from "../components/MealPreview.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter.data || []);
const ingredients = computed(() => store.state.templateMeals.data);
const isLoading = ref(true);
const router = route.params.letter;

onMounted(async () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
  try {
    await store.dispatch("searchTemplateMeals");
  } catch (error) {
    console.log(error);
  } finally {
    //Set Loading to False
    isLoading.value = false;
  }
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
