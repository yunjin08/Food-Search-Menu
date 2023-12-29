<template>
  <div class="flex flex-col items-center justify-center max-w-[50%] mx-auto">
    <h1 class="text-8xl calligraphy-paragraph font-bold text-[#5d582a] p-8">
      {{ meal.strMeal }}
    </h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-[30rem]" />
    <div
      class="grid text-[#5d582a] grid-cols-1 mt-2 sm:grid-cols-3 text-lg py-2 justify-evenly text-center"
    >
      <div>
        <strong class="font-bold text-[#5d582a]">Category:</strong>
        {{ meal.strCategory || "None" }}
      </div>
      <div>
        <strong class="font-bold text-[#5d582a]">Area:</strong>
        {{ meal.strArea || "None" }}
      </div>
      <div>
        <strong class="font-bold text-[#5d582a]">Tags:</strong>
        {{ meal.strTags || "None" }}
      </div>
    </div>

    <div class="flex text-[#5d582a] w-full">
      <div class="flex flex-col w-[50%] justify-center items-center">
        <h2 class="text-2xl just font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strIngredient${ind}`]">
              {{ ind }}. {{ meal[`strIngredient${ind}`] }}
            </li></template
          >
        </ul>
      </div>
      <div class="flex flex-col w-[50%] justify-center items-center">
        <h2 class="text-2xl font-semibold mb-3">Measurements</h2>
        <ul>
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strMeasure${ind}`] != 0">
              {{ ind }}. {{ meal[`strMeasure${ind}`] }}
            </li></template
          >
        </ul>
      </div>
    </div>
    <div class="mt-8 mb-10">
      <YoutubeButton :href="meal.strYoutube" />
    </div>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>
