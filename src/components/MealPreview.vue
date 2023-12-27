<template>
  <div class="bg-white shadow border-[1px] border-[#E8DF91] rounded-xl">
    <div>
      <img
        :src="meal.strCategoryThumb"
        :alt="meal.strCategory"
        class="rounded-t-xl h-64 w-full object-cover"
      />
    </div>
    <div class="p-3">
      <h3 class="bold font-serif mt-2 text-xl">{{ meal.strCategory }}</h3>
      <div class="flex items-center justify-between my-2">
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
