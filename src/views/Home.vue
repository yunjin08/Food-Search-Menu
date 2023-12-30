<template>
  <div class="grid lg:grid-cols-3">
    <img
      src="../images/bg1.jpg"
      class="object-cover w-full lg:w-auto h-[15rem] min-450:h-[20rem] md:h-[25rem] lg:h-[43.5rem]"
      alt="bg1"
    />
    <div
      class="lg:w-[33%vw] w-full h-[15.5rem] min-450:h-[18rem] md:h-[25rem] lg:h-full flex flex-col items-center justify-center"
    >
      <h1
        class="calligraphy-paragraph text-6xl sm:text-7xl md:text-8xl font-bold text-[#E4DB84]"
      >
        NoshNest
      </h1>
      <h2
        class="calligraphy-paragraph text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8DF91]"
      >
        Recipe Website
      </h2>

      <p
        class="max-w-[25rem] font-serif px-4 sm:px-0 text-sm sm:text-md md:text-lg mt-5 text-center text-[#a9a368]"
      >
        Explore a treasure trove of mouthwatering recipes crafted with love and
        passion. From quick and easy weeknight meals to indulgent desserts that
        satisfy your sweet tooth, our collection is designed to inspire both
        novice cooks and seasoned chefs.
      </p>
    </div>
    <img
      src="../images/bg2.jpg"
      class="object-cover w-full lg:w-auto h-[15rem] min-450:h-[20rem] md:h-[25rem] lg:h-[43.5rem]"
      alt="bg2"
    />
  </div>

  <div
    class="bg-[#f9f9f2] px-4 md:px-8 flex items-center flex-col justify-center h-62"
  >
    <h1
      class="font-serif mt-5 md:mt-10 text-xl md:text-2xl text-center font-medium text-[#696223]"
    >
      Browse Food Menus and Recipes in Different Categories
    </h1>
    <p
      class="text-[#9b923b] md:max-w-[30rem] text-sm md:text-lg sm:max-w-[28rem] max-w-[23rem] text-center mb-3"
    >
      Appetizers to desserts, streamline your search and discover a world of
      diverse recipes designed to suit every taste and occasion.
    </p>
    <Loading v-if="isLoading" />
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-4 xl:gap-8 md:p-8 min-450:px-6 md:px-12 xl:px-24"
    >
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
import Loading from "../components/Loading.vue";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);
const randomNumber = Math.floor(Math.random() * 10) + 1;
const secondNumber = randomNumber + 4;
const isLoading = ref(true); //Set Inital loading State

onMounted(async () => {
  try {
    const response = await axiosClient.get("/categories.php");
    ingredients.value = response.data.categories.slice(
      randomNumber,
      secondNumber
    );
  } catch (error) {
    console.log(error);
  } finally {
    //Set Loading to False
    isLoading.value = false;
  }
});
</script>
