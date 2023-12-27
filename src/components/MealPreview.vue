<template>
  <div
    class="bg-white h-[30rem] shadow border-[1px] border-[#a49c53] rounded-xl mb-10 overflow-scroll"
  >
    <div>
      <img
        :src="meal.strCategoryThumb"
        :alt="meal.strCategory"
        class="rounded-t-xl h-64 w-full object-cover"
      />
    </div>
    <div class="p-3">
      <h3 class="bold font-serif mt-2 text-xl text-[#8e8852]">
        {{ meal.strCategory }}
      </h3>
      <div class="flex items-center justify-between my-2">
        <p class="text-sm text-[#a7a16a]">{{ meal.strCategoryDescription }}</p>
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
