<template>
  <div class="bg-white mb-10 shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-64 w-full object-cover"
      />
    </router-link>
    <div class="p-3 px-4">
      <h3 class="font-semibold font-serif mt-2 text-xl text-[#5d582a]">
        {{ meal.strMeal }}
      </h3>
      <p class="text-md mt-1 mb-1 text-[#5d582a] font-medium">
        Area: {{ meal.strArea }}
      </p>
      <p class="text-md text-[#5d582a] font-medium">
        Category: {{ meal.strCategory }}
      </p>
      <div class="flex items-center justify-between mt-4 mb-2">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-6 py-2 rounded border-2 border-red-500 bg-red-500 hover:bg-red-600 text-white transition-colors"
          >Watch on Youtube</a
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
