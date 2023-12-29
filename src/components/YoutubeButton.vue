<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded-lg border-2 text-white bg-red-600 hover:bg-red-700"
  >
    Watch on Youtube
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
