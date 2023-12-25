<template>
  <div>
    <div class="p-8 pb-0 px-24">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-gray-200 w-full border-2 mb-3"
        placeholder="Search for Ingredients"
      />
    </div>
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
      <router-link
        :to="{
          name: 'byIngredients',
          params: { ingredients: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold">
          {{ ingredient.strIngredient }}
        </h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);

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

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
