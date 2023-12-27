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
  <div class="h-60 bg-white">
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealItem from "../components/MealItem.vue";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/categories.php");
  console.log(response.data);
  ingredients.value = response.data.categories;
});
</script>
