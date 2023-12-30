<template>
  <div class="bg-white mb-10 shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-40 md:h-64 w-full object-cover"
      />
    </router-link>
    <div class="p-3 px-4">
      <h3
        class="font-semibold font-serif mt-2 text-lg md:text-xl text-[#5d582a]"
      >
        {{ meal.strMeal }}
      </h3>
      <p class="text-sm md:text-md mt-1 mb-1 text-[#5d582a] font-medium">
        Area: {{ meal.strArea || "None" }}
      </p>
      <p class="text-sm md:text-md text-[#5d582a] font-medium">
        Category: {{ meal.strCategory || "None" }}
      </p>
      <div class="flex items-center justify-between mt-4 mb-2">
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-5 md:px-6 md:py-2 py-1 rounded hover:cursor-pointer bg-[#918a51] hover:bg-red-600 text-white transition-colors"
          >Click for More Info
        </router-link>
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
