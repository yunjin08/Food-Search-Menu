<template>
  <div class="grid grid-cols-3">
    <img src="../images/bg1.jpg" class="" alt="bg1" />
    <p class="w-[33%vw] calligraphy-paragraph">Hi there</p>
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
