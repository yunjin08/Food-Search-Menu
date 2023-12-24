<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold p-8">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[80%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>: {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>: {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong>: {{ meal.strTags }}</div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strIngredient${ind}`]">
              {{ ind }}. {{ meal[`strIngredient${ind}`] }}
            </li></template
          >
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measurements</h2>
        <ul>
          <template v-for="ind in 20" :key="ind">
            <li v-if="meal[`strMeasure${ind}`]">
              {{ ind }}. {{ meal[`strMeasure${ind}`] }}
            </li></template
          >
        </ul>
      </div>
      <div>
        <YoutubeButton :href="meal.strYoutube" />
      </div>
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
