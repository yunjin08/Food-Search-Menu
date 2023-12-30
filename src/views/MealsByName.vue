<template>
  <div class="min-h-[100vh]">
    <div class="p-7 pb-0 px-24">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-gray-200 w-full text-[#5d582a] border-2 focus:outline-none focus:border-[#959041] focus:ring-[#959041] focus:ring-1"
        placeholder="Search for Meals"
        @change="searchMeals"
      />
      <p v-if="!keyword" class="text-[0.8rem] text-[#5d582a] pl-1">
        Search meals for detailed description and recipes.
      </p>
    </div>
    <div
      v-if="meals && meals.length === 0"
      :class="[
        'grid',
        'grid-cols-1',
        'md:grid-cols-4',
        'md:grid-cols-3',
        'gap-8',
        'p-8',
        'px-24',
        { 'pt-[3.2rem]': keyword },
      ]"
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
        :class="[
          'grid',
          'grid-cols-1',
          'md:grid-cols-4',
          'md:grid-cols-3',
          'gap-8',
          'p-8',
          'px-24',
          { 'pt-[3.2rem]': keyword },
        ]"
      >
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
      </div>

      <div
        v-if="isDecision && !meals"
        class="flex justify-center items-center font-serif text-3xl text-[#696223] h-[80vh]"
      >
        We apologize, but there are currently no available meals for the
        selected criteria.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import { useRoute } from "vue-router";
import Loading from "../components/Loading.vue";
import MealPreview from "../components/MealPreview.vue";

const route = useRoute();
const keyword = ref("");
const isLoading = ref(true);
const isDecision = ref(false);

const meals = computed(() => {
  return store.state.searchedMeals.data;
});

const ingredients = computed(() => {
  return store.state.templateMeals.data;
});

const searchMeals = async () => {
  try {
    // Reset meals to an empty array before making a new search
    await store.dispatch("searchMeals", keyword.value);
  } catch (error) {
    console.log(error);
  } finally {
    isDecision.value = true;
  }
};

onMounted(async () => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
  try {
    await store.dispatch("searchTemplateMeals");
  } catch (error) {
    console.log(error);
  } finally {
    //Set Loading to False
    isLoading.value = false;
  }
});
</script>

<style scoped>
input {
  border: 2px solid #837e30;
}
input::placeholder {
  color: #959041;
}
</style>
