<template>
  <div class="relative">
    <img
      src="../images/bg3.webp"
      alt="bg"
      class="absolute top-0 w-[100vw] h-full opacity-15 z-[-1]"
    />
    <div class="flex flex-col items-center justify-center max-w-[50%] mx-auto">
      <h1
        class="text-[4.2rem] min-450:text-[5.3rem] md:text-[5.8rem] lg:text-8xl text-center calligraphy-paragraph font-bold text-[#5d582a] p-8"
      >
        {{ meal.strMeal }}
      </h1>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-[30rem] border-2 border-[#5d582a]"
      />
      <div
        class="grid text-[#5d582a] grid-rows-3 mt-2 md:grid-cols-3 text-md md:text-lg py-2 justify-evenly text-center h-[8rem] md:h-[5rem]"
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

      <div class="flex md:flex-row items-center flex-col text-[#5d582a] w-full">
        <div class="flex flex-col w-[50%] justify-center items-center">
          <h2 class="text-xl md:text-2xl just font-semibold mb-3">
            Ingredients
          </h2>
          <ul>
            <template v-for="ind in 20" :key="ind">
              <li v-if="meal[`strIngredient${ind}`]">
                {{ ind }}. {{ meal[`strIngredient${ind}`] }}
              </li></template
            >
          </ul>
        </div>
        <div
          class="flex flex-col pt-4 md:pt-0 w-[50%] justify-center items-center"
        >
          <h2 class="text-xl md:text-2xl font-semibold mb-3">Measurements</h2>
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
