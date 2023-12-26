<template>
  <div class="grid grid-cols-3">
    <img src="../images/bg1.jpg" class="object-cover h-[43.5rem]" alt="bg1" />
    <div class="w-[33%vw] h-full flex items-center justify-center">
      <h1 class="calligraphy-paragraph text-8xl font-bold text-[#45eAms]">
        NoshNest
      </h1>
    </div>
    <img src="../images/bg2.jpg" class="object-cover h-[43.5rem]" alt="bg2" />
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
