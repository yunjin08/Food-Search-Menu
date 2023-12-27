<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-64 w-full object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold font-serif mt-2 text-xl text-[#5d582a]">
        {{ meal.strMeal }}
      </h3>
      <p class="text-sm text-[#7d784a]">{{ meal.strArea }}</p>
      <p class="text-sm text-[#7d784a]">{{ meal.strCategory }}</p>
      <div class="flex items-center justify-between">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-2 rounded border-2 border-red-500 bg-red-500 hover:bg-red-600 text-white transition-colors"
          >Youtube</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
