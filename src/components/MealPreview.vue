<template>
  <div
    class="bg-white custom-scrollbar h-[23rem] md:h-[30rem] shadow border-[1px] border-[#a49c53] rounded-xl mb-10 overflow-y-auto"
  >
    <div>
      <img
        :src="meal.strCategoryThumb"
        :alt="meal.strCategory"
        class="rounded-t-xl h-40 md:h-64 w-full object-cover"
      />
    </div>
    <div class="p-3">
      <h3 class="font-semibold font-serif mt-2 text-xl text-[#5d582a]">
        {{ meal.strCategory }}
      </h3>
      <div class="flex items-center justify-between my-2">
        <p class="text-sm text-[#7d784a]">{{ meal.strCategoryDescription }}</p>
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

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 2px; /* Set the width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a49c53; /* Set the color of the scrollbar thumb */
  border-radius: 6px; /* Set the border-radius of the scrollbar thumb */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f0f0f0; /* Set the color of the scrollbar track */
}
</style>
