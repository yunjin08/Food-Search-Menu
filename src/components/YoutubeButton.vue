<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white bg-red-600"
  >
    Youtube
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
