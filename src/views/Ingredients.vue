<template>
  <div class="min-h-[90vh] bg-[#f9f9f2]">
    <div class="p-7 pb-0 px-24">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-gray-200 w-full text-[#959041] border-2 focus:outline-none focus:border-[#959041] focus:ring-[#959041] focus:ring-1"
        placeholder="Search for Ingredients"
      />
    </div>
    <Loading v-if="isLoading" />
    {{ console.log(isLoading) }}

    <div class="p-8">
      <h1 class="text-4xl font-bold mb-4 text-[#454010]">Ingredients</h1>
      <div class="grid grid-cols-4 gap-3">
        <router-link
          :to="{
            name: 'byIngredients',
            params: { ingredients: ingredient.strIngredient },
          }"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="block bg-white p-3 mb-3 shadow border-[1px] border-[#514c1c] rounded-2xl hover:scale-105 transition"
        >
          <h3
            class="text-2xl calligraphy-paragraph text-[#514c1c] font-semibold rounded-2xl"
          >
            {{ ingredient.strIngredient }}
          </h3>
        </router-link>
      </div>
      <h3
        v-if="computedIngredients.length === 0 && keyword.trim() !== ''"
        class="flex justify-center items-center font-serif text-3xl text-[#696223] h-[80vh]"
      >
        We apologize, but there are currently no available meals for the
        selected criteria.
      </h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Loading from "../components/Loading.vue";

const keyword = ref("");
const ingredients = ref([]);
const isLoading = ref(true);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => {
    return (
      (i.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
  });
});

onMounted(async () => {
  try {
    await axiosClient.get("list.php?i=list").then(({ data }) => {
      ingredients.value = data.meals;
    });
  } catch (error) {
    console.log(error);
  } finally {
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
