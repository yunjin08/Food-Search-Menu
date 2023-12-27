<template>
  <div class="grid grid-cols-3">
    <img src="../images/bg1.jpg" class="object-cover h-[43.5rem]" alt="bg1" />
    <div class="w-[33%vw] h-full flex flex-col items-center justify-center">
      <h1 class="calligraphy-paragraph text-8xl font-bold text-[#E4DB84]">
        NoshNest
      </h1>
      <h2 class="calligraphy-paragraph text-4xl font-bold text-[#E8DF91]">
        Recipe Website
      </h2>
      <p
        class="max-w-[25rem] font-serif text-lg mt-5 text-center text-[#a9a368]"
      >
        Explore a treasure trove of mouthwatering recipes crafted with love and
        passion. From quick and easy weeknight meals to indulgent desserts that
        satisfy your sweet tooth, our collection is designed to inspire both
        novice cooks and seasoned chefs.
      </p>
    </div>
    <img src="../images/bg2.jpg" class="object-cover h-[43.5rem]" alt="bg2" />
  </div>
  <div class="bg-[#eeeee1] h-62">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 px-24">
      <MealPreview
        v-for="(ingredient, index) of ingredients"
        :key="ingredient.idCategory"
        :meal="ingredient"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealPreview from "../components/MealPreview.vue";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);
const randomNumber = Math.floor(Math.random() * 10) + 1;
const secondNumber = randomNumber + 4;
console.log(randomNumber);
console.log(secondNumber);

onMounted(async () => {
  const response = await axiosClient.get("/categories.php");
  console.log(response.data);
  ingredients.value = response.data.categories.slice(
    randomNumber,
    secondNumber
  );
});
</script>
